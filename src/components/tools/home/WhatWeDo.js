import { Fragment } from "react";
import { Grid } from "@material-ui/core";
import SectionTitles from "../useableComponents/SectionTitles";
import AboutUsSectionText from "./aboutUsSection/AboutUsSectionText";
import AboutUsSectionImage from "./aboutUsSection/AboutUsSectionImage";
const WhatWeDo = (props) => {
  return (
    <Fragment>
      <SectionTitles title={props.sectionTitle} pdTop="pt-12" />
      <Grid
        className={["in-main-container"].join(" ")}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <AboutUsSectionText
          longTitle={props.longTitle}
          longDesc={props.longDesc}
          btnPrimaryText={props.btnPrimaryText}
          btnPrimaryLink={props.btnPrimaryLink}
          btnSecondryLink={props.btnSecondryLink}
          btnSecondryText={props.btnSecondryText}
        />
        <AboutUsSectionImage img={props.img} alt={props.alt} />
      </Grid>
    </Fragment>
  );
};

export default WhatWeDo;
