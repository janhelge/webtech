import React from "react";
import Footer from "./footer";
import Header from "./header"
//import  "../styles/global.css";
import * as styles from "./layout.modules.css";

export default function Layout({ children }) {
  return (
    <div className="{styles.container}">

      <Header />
      {children}
      <Footer />
    </div>
    
  );
}