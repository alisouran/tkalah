import { Fragment } from "react";
import { FiPhoneCall, FiMail, FiInstagram, FiFacebook } from "react-icons/fi";
import { IoMdPaperPlane } from "react-icons/io";
import { Container } from "@material-ui/core";

const Topbar = () => {
  return (
    <Fragment>
      <Container>
        <div className="mt-2 h-30px">
          <FiPhoneCall className="float-left mt-05 icon-success" />
          <span className="float-left pl-2 bold">031-12345678</span>
          <FiMail className="float-left ml-5 mt-05 icon-success" />
          <span className="float-left pl-2">info@tkalah.com</span>
          <a href="https://instagram.com/" className="icon-primary">
            <FiInstagram className="float-right ml-5 mt-05 icon-primary" />
          </a>
          <a href="https://fb.com/" className="icon-primary">
            <FiFacebook className="float-right ml-5 mt-05 icon-primary" />
          </a>
          <a href="https://t.me/" className="icon-primary">
            <IoMdPaperPlane className="float-right ml-5 mt-05 icon-primary" />
          </a>
        </div>
      </Container>
    </Fragment>
  );
};

export default Topbar;
