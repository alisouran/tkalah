import { Fragment, useState } from "react";
import { Paper, Divider } from "@material-ui/core";
import Navbar from "./header/Navbar";
import SliderTop from "./header/SliderTop";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

let i = 0;
const Header = () => {
  const [slide, setSlide] = useState(0);
  const [animation, setAnimation] = useState(false);
  const slides = [
    {
      img: "/assets/img/slide1.jfif",
      sliderTitle: "نبوغ کاری در تجهیز کالای حکیم",
      shortEx: "شرایط ویژه‌ی فروش فوق‌العاده",
      imageAlt: "image 1",
      btnText: "همین حالا با ما باشید",
      btnLink: "/btnLink",
    },
    {
      img: "/assets/img/slide2.jpg",
      sliderTitle: "شروع کار به صورت دیجیتال",
      shortEx: "اینبار ما را ببینید",
      imageAlt: "image 2",
      btnText: "وارد دنیای دیجیتال بشیم",
      btnLink: "/btnLink",
    },
  ];

  const nextSlide = () => {
    if (slides.length - 1 === i) {
      i = 0;
      setAnimation(true);
      setTimeout(() => {
        setSlide(0);
        setAnimation(false);
      }, 500);
    } else {
      i += 1;
      setAnimation(true);
      setTimeout(() => {
        setSlide(i);
        setAnimation(false);
      }, 500);
    }
  };
  const prevSlide = () => {
    if (0 === i) {
      i = slides.length - 1;
      setAnimation(true);
      setTimeout(() => {
        setSlide(slides.length - 1);
        setAnimation(false);
      }, 500);
    } else {
      i -= 1;
      setAnimation(true);
      setTimeout(() => {
        setSlide(i);
        setAnimation(false);
      }, 500);
    }
  };

  return (
    <Fragment>
      <Paper className="main-container pt-6 pb-6 headerPaper">
        <div className="arrowRight" onClick={nextSlide}>
          <FiArrowRight />
        </div>
        <div className="in-main-container">
          <Navbar />
          <Divider className="divider" />
          <SliderTop
            img={slides[slide].img}
            sliderTitle={slides[slide].sliderTitle}
            imageAlt={slides[slide].imageAlt}
            shortEx={slides[slide].shortEx}
            btnText={slides[slide].btnText}
            btnLink={slides[slide].btnLink}
            animationClass={animation}
          />
        </div>
        <div className="arrowLeft" onClick={prevSlide}>
          <FiArrowLeft />
        </div>
      </Paper>
    </Fragment>
  );
};

export default Header;
