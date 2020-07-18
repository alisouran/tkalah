import { Fragment } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import Link from "next/link";

const ServicesCard = (props) => {
  return (
    <Fragment>
      <Grid item sm={2}>
        <Paper className="text-center cardPaper">
          <div className="servicesCardIcon mt-2">{props.icon}</div>
          <h3 className="mt-3 bold">{props.title}</h3>
          <p className="text-centerJustify mt-2 color-gray">{props.shortEx}</p>
          <Link href={props.btnLink}>
            <Button
              variant="outlined"
              color="inherit"
              className="mt-8 mb-6 sectionCardBtn"
            >
              {props.btnText}
            </Button>
          </Link>
        </Paper>
      </Grid>
    </Fragment>
  );
};

export default ServicesCard;
