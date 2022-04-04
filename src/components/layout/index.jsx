import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import SideNavbar from "../side-navbar/SideNavbar";
import LayoutStyle from "../../styles/layouts/Layout.module.scss"

function Layout({ children }) {
  return (
    <div>
      <Header />
      <SideNavbar />
      <div className={LayoutStyle.main_content}>
      {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
