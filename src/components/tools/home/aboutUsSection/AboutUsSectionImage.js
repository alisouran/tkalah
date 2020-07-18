import { Fragment } from "react";
import { Grid } from "@material-ui/core";

const AboutUsSectionImage = (props) => {
  return (
    <Fragment>
      <Grid item sm={6}>
        <img className="aboutUsSectionImg" src={props.img} alt={props.alt} />
      </Grid>
    </Fragment>
  );
};

export default AboutUsSectionImage;
