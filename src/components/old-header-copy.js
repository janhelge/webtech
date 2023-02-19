import React from "react";
import {Link} from "gatsby";
import styles from "./header.module.css";
export default function Header() {
  return (
    <header className="{styles.header}">
     <nav>
      <Link to="/">Home</Link>|<Link to="/about">About</Link>
     </nav>
    </header>
  );
}