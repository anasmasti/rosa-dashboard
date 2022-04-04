import React from "react";
import HeaderStyle from "../../styles/layouts/Header.module.scss"
import {FaBars} from "react-icons/fa"

function Header() {
  return (
    <div className={[HeaderStyle.header_section, "col-lg-8 d-flex justify-content-lg-end justify-content-sm-end mx-3"]}>
      <nav className={[HeaderStyle.navbar, "navbar navbar-expand-lg navbar-light mt-4 me-4"].join(' ')}>
        <div className="container-fluid">
          <div className="d-flex mx-5">
            <a id="sidebar-collapse" className="btn bg-white border-0 me-3">
              <FaBars />
            </a>
            <h3>RosaColor dashboard</h3>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
