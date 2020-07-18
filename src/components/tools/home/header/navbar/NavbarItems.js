import { Fragment } from "react";
import Link from "next/link";

const NavbarItems = (props) => {
  return (
    <Fragment>
      {props.subMenu ? (
        <li className="dropdown">
          <Link href={props.path}>
            <a className="navLink disabled-link">{props.title}</a>
          </Link>
          <ul className="dropdown-content">
            <li>
              <Link href="/">
                <a className="lighter subItems">زیر منو</a>
              </Link>
            </li>
          </ul>
        </li>
      ) : (
        <li>
          <Link as={props.path} href={props.path}>
            <a className="navLink">{props.title}</a>
          </Link>
        </li>
      )}
    </Fragment>
  );
};

export default NavbarItems;
