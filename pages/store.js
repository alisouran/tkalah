import { Fragment } from "react";
import { useRouter } from "next/router";
const Store = (params) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Fragment>
      <h1>Store</h1>
    </Fragment>
  );
};

export default Store;
