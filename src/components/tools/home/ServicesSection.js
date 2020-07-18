import { Fragment } from "react";
import SectionTitles from "../useableComponents/SectionTitles";
import { Grid } from "@material-ui/core";
import { MdLoyalty } from "react-icons/md";
import ServicesCard from "./servicesSection/ServicesCard";

let cards = [];

const ServicesSection = (props) => {
  {
    /* Tabe Sakht Card ha Az Array Bala  */
  }
  const sectionCards = () => {
    cards = [];
    for (let i = 0; i < props.data.length && i < 5; i++) {
      cards.push(
        <ServicesCard
          title={props.data[i].title}
          shortEx={props.data[i].shortEx}
          btnText={props.data[i].btnText}
          btnLink={props.data[i].btnLink}
          icon={props.data[i].icon}
        />
      );
    }
    return cards;
  };

  return (
    <Fragment>
      <SectionTitles title={props.sectionTitle} pdTop="pt-15" />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="pt-8 main-container"
      >
        {sectionCards()}
      </Grid>
    </Fragment>
  );
};

export default ServicesSection;
