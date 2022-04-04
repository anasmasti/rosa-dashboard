import React, { useState } from "react";
import $ from "jquery";
import logo from "../../images/logo.png";
import SideNavBarStyle from "../../styles/layouts/SideNavbar.module.scss"

function SideNavbar() {
  const [isActive, setIsActive] = useState(null);

  //   Toggel side menu for mobile
  const showAndHideMobileSideBarMenu = () => {
    if(isActive !== null) setIsActive(null)
    if(isActive === null) setIsActive(SideNavBarStyle.active)
  };
  return (
    <div className={SideNavBarStyle.vertical_nav +` mb-5 ` +  isActive } id="sidebar">

        <div className="card d-block justify-content-between border-0 side-navbar-card">
          <div className="px-3">
            <a
              id="sidebar-collapse-mobile"
              className="btn bg-white border-0"
              onClick={showAndHideMobileSideBarMenu}
            >
              Scroll<i className="far fa-chevron-left"></i>
            </a>
            <div className="d-flex justify-content-center w-100">
              <img
                src={logo}
                alt="RosaColor Logo"
                width="150px"
                className="mr-3 img-thumbnail border-0 logo"
              />
            </div>
          </div>
          <div className="card-body">
            <h6 className="mainText">Ahmad ahmad</h6>
            <span className="badge danger-btn">Administrateur</span>
          </div>

          <div className="">
            <ul className="nav flex-column p-4">
              <li className="nav-item my-4">
                <a className="nav-link second-btn border-0">
                  <i className="fal fa-home"></i> Dashboard
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link second-btn border-0">
                  <i className="fal fa-home"></i> Products
                </a>
              </li>

              <li className="nav-item my-4">
                <a className="nav-link second-btn border-0">
                  <i className="fal fa-home"></i> Settings
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link second-btn border-0">
                  <i className="fal fa-home"></i> Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default SideNavbar;
