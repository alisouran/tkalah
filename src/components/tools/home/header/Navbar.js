import React, { Fragment, useRef, useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import NavbarItems from "./navbar/NavbarItems";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const [sticky, setSticky] = useState();
  const navRef = useRef(null);

  const router = useRouter();
  useEffect(() => {
    window.onscroll = () => {
      if (router.pathname === "/") {
        if (window.pageYOffset > 120) {
          setSticky("navbarFixedTop pb-2 pt-3");
        } else {
          setSticky("pb-4");
        }
      } else {
        console.log("not scrolled");
      }
    };
  }, [navRef]);

  return (
    <Fragment>
      <Grid
        container
        className={["navbarT", sticky].join(" ")}
        ref={(navbar) => {
          navRef.current = navbar;
        }}
      >
        <Grid item sm={1} className="v-center">
          <Button className="navBarBtn" variant="contained">
            ارسال درخواست
          </Button>
        </Grid>
        <Grid item sm={10} className="v-center">
          <nav className="navbar">
            <ul>
              <NavbarItems title={"خانه"} path={"/"} subMenu={false} />
              <NavbarItems title={"فروشگاه"} path={"/store"} subMenu={false} />
              <NavbarItems title={"پشتیبانی"} path={"/"} subMenu={false} />
              <NavbarItems title={"اخبار"} path={"/"} subMenu={false} />
              <NavbarItems title={"بلاگ"} path={"/"} subMenu={false} />
              <NavbarItems title={"تماس با ما"} path={"/"} subMenu={false} />
              <NavbarItems title={"درباره ما"} path={"/"} subMenu={false} />
            </ul>
          </nav>
        </Grid>
        <Grid item sm={1} className="v-center">
          <img src="/assets/img/logo.svg" alt="Logo" className="logo" />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Navbar;
