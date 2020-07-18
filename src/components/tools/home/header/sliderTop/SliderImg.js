import { Fragment } from "react";

const SliderImg = (props) => {
  return (
    <Fragment>
      <div
        className={[
          "sliderImg",
          props.animation ? "hideText" : "showText",
        ].join(" ")}
      >
        <img src={props.img} alt={props.title} />
      </div>
    </Fragment>
  );
};

export default SliderImg;
