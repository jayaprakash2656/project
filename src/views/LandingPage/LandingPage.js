import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import SectionCarousel from "./Sections/Carousal";
//import './Sections/style/style.css'

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="info"
        routes={dashboardRoutes}
        brand="SMOORE"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 700,
          color: "white"
        }}
        {...rest}
      />
      <SectionCarousel/>
      <div className={classNames(classes.main, classes.mainRaised)} 
      style={{margin: "-112px 30px 0px"}}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
