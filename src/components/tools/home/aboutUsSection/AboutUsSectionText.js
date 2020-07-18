import { Fragment } from "react";
import { Grid, Button } from "@material-ui/core";
import Link from "next/link";

const AboutUsSectionText = (props) => {
  return (
    <Fragment>
      <Grid item sm={6}>
        <h4 className="aboutUsSectionTitle">{props.longTitle}</h4>
        <p className="aboutUsSectionShortEx pt-5 pb-6">{props.longDesc}</p>
        <Link href={props.btnPrimaryLink}>
          <Button variant="contained" className="aboutUsSectionButton1 ml-4 ">
            {props.btnPrimaryText}
          </Button>
        </Link>
        <Link href={props.btnSecondryLink}>
          <Button variant="outlined" className="aboutUsSectionButton2">
            {props.btnSecondryText}
          </Button>
        </Link>
      </Grid>
    </Fragment>
  );
};

export default AboutUsSectionText;
