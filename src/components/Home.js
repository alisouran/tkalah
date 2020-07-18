const { Fragment } = require("react");
import Topbar from "./tools/home/header/Topbar";
import Header from "./tools/home/Header";
import ServicesSection from "./tools/home/ServicesSection";
import WhatWeDo from "./tools/home/WhatWeDo";
import { MdLoyalty } from "react-icons/md";

const Home = () => {
  {
    /* Array Sakht card ha */
  }
  const data = [
    {
      title: "به آینده اعتماد کنید!",
      shortEx:
        "اعتماد کردن به ما، یعنی اعتماد کردن به آینده‌؛ پس از امروز به آینده‌ی خود با ما اعتماد کنید!",
      btnText: "بیشتر بدانید",
      btnLink: "/",
      icon: <MdLoyalty />,
    },
    {
      title: "به آینده اعتماد کنید!",
      shortEx:
        "اعتماد کردن به ما، یعنی اعتماد کردن به آینده‌؛ پس از امروز به آینده‌ی خود با ما اعتماد کنید!",
      btnText: "بیشتر بدانید",
      btnLink: "/",
      icon: <MdLoyalty />,
    },
    {
      title: "به آینده اعتماد کنید!",
      shortEx:
        "اعتماد کردن به ما، یعنی اعتماد کردن به آینده‌؛ پس از امروز به آینده‌ی خود با ما اعتماد کنید!",
      btnText: "بیشتر بدانید",
      btnLink: "/",
      icon: <MdLoyalty />,
    },
    {
      title: "به آینده اعتماد کنید!",
      shortEx:
        "اعتماد کردن به ما، یعنی اعتماد کردن به آینده‌؛ پس از امروز به آینده‌ی خود با ما اعتماد کنید!",
      btnText: "بیشتر بدانید",
      btnLink: "/",
      icon: <MdLoyalty />,
    },
    {
      title: "به آینده اعتماد کنید!",
      shortEx:
        "اعتماد کردن به ما، یعنی اعتماد کردن به آینده‌؛ پس از امروز به آینده‌ی خود با ما اعتماد کنید!",
      btnText: "بیشتر بدانید",
      btnLink: "/",
      icon: <MdLoyalty />,
    },
  ];
  return (
    <Fragment>
      <Topbar />
      <Header />
      {/* Component Section Services */}
      <ServicesSection data={data} sectionTitle={"خدمات تجهیز کالای حکیم"} />
      {/* Component Section About Us */}
      <WhatWeDo
        sectionTitle="درباره‌ی ما"
        longTitle="
          این روزها دنیای دیجیتال باید ما رو به سمت چیزی ببره که ما بهش میگیم
          پزشکی دیجیتال؛ ساخت زندگی راحت تر امروزه با کارهای دیجیتال انجام میشه
          و ما اینجا بهتون کمک میکنیم برای این کار."
        longDesc="
          حالا اگه فکر میکنید شما هم نیاز دارید به این که به دنیای دیجیتال ما
          وارد بشید، خیلی عالیه اما اگر هنوز نیازه که بیشتر با ما آشنا بشید روی
          درباره‌ی ما کلیک کنید تا کمکتون کنیم."
        btnPrimaryText="فروشگاه"
        btnPrimaryLink="/"
        btnSecondryLink="/"
        btnSecondryText="درباره‌ی ما"
        img={"/assets/img/aboutUsSection.png"}
        alt={"About Us Section Image"}
      />
    </Fragment>
  );
};

export default Home;
