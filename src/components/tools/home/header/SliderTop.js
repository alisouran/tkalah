import { Fragment } from "react";
import { Grid, Button } from "@material-ui/core";
import SlideText from "./sliderTop/SlideText";
import SliderImg from "./sliderTop/SliderImg";

const SliderTop = (props) => {
  return (
    <Fragment>
      <Grid container className="sliderTop">
        <Grid item sm={5}>
          <SlideText
            title={props.sliderTitle}
            shortEx={props.shortEx}
            btnText={props.btnText}
            btnLink={props.btnLink}
            animation={props.animationClass}
          />
        </Grid>
        <Grid item sm={7}>
          <SliderImg
            img={props.img}
            title={props.imageAlt}
            animation={props.animationClass}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SliderTop;
