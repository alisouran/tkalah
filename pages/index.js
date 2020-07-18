import { Fragment } from "react";
import Home from "../src/components/Home";
import Head from "next/head";
const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>تجهیز کالای حکیم</title>
      </Head>
      <Home />
    </Fragment>
  );
};

export default Index;
