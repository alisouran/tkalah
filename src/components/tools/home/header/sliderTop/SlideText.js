import { Fragment } from "react";
import { Button } from "@material-ui/core";
import Link from "next/link";

const SlideText = (props) => {
  return (
    <Fragment>
      <h2
        className={[
          "sliderTopTitle",
          props.animation ? "hideText" : "showText",
        ].join(" ")}
      >
        {props.title}
      </h2>
      <h3
        className={[
          "sliderTopParagraph",
          props.animation ? "hideText" : "showText",
        ].join(" ")}
      >
        {props.shortEx}
      </h3>
      <Link href={props.btnLink}>
        <Button
          className={[
            "mt-10",
            "sliderTopBtn",
            props.animation ? "hideText" : "showText",
          ].join(" ")}
          color="primary"
          variant="contained"
        >
          {props.btnText}
        </Button>
      </Link>
    </Fragment>
  );
};

export default SlideText;
