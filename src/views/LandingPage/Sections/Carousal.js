import React, { Component } from "react";
import Axios from 'axios';
import Carousel from "react-slick";
import { withStyles } from '@material-ui/styles';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

class SectionCarousel extends Component {
  state = {
    data: null
  }
  componentDidMount() {
    Axios.get('http://api.gitodemos.com/v1/home/banner?client_id=25&client_secret=Yqk5mrGzy5S0fHSCigCm90lrL2AIBGk0Roc6lnzw')
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    const { classes } = this.props;
    let images = null;
    if (this.state.data) {
      images = this.state.data.data.map(obj => {
        return (
          <div key={obj.links.details.name}>
            <img src={obj.links.image} alt="First slide" className="slick-image carosel-image" />
            <div className="slick-caption">
              <h4>
                {obj.links.details.name}
              </h4>
            </div>
          </div>
        );
      });
    }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <div >
          <GridContainer>
            <GridItem xs={12} className={classes.marginAuto}>
              <Card carousel>
                <Carousel  {...settings}>
                  {images}
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SectionCarousel);