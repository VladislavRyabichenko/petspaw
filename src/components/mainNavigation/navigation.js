import React from "react";
import { Link, Outlet } from "react-router-dom";

import stylesNavigation from "./styleNavigation.module.scss";

export function Navigation() {
  return (
    <div className={stylesNavigation.mainNavigation}>
      <div className={stylesNavigation.logo}>
        <div className={stylesNavigation.logo}>
          <img src="./images/logo.svg" alt="LOGO" />
          <span>PetsPaw</span>
        </div>
      </div>
      <div className={stylesNavigation.welcomeText}>
        <h1>Hi intern</h1>
        <p>Welcome to MI 2022 Front-end test</p>
      </div>
      <div className={stylesNavigation.mainNavigationLinks}>
        <div className={stylesNavigation.div1}>
          <Link to="/voting">
            <div className={stylesNavigation.navigationIcon}>
              <img src="./images/menu-icon-voting.png" alt="voting" />
            </div>
            <div className={stylesNavigation.navigationMenuItem}>
              <button>VOTING</button>
            </div>
          </Link>
        </div>
        <div className={stylesNavigation.div2}>
          <Link to="/breeds">
            <div className={stylesNavigation.navigationIcon}>
              <img src="./images/menu-icon-breeds.png" alt="voting" />
            </div>
            <div className={stylesNavigation.navigationMenuItem}>
              <button>BREEDS</button>
            </div>
          </Link>
        </div>
        <div className={stylesNavigation.div3}>
          <Link to="/gallery">
            <div className={stylesNavigation.navigationIcon}>
              <img src="./images/menu-icon-gallery.png" alt="voting" />
            </div>
            <div className={stylesNavigation.navigationMenuItem}>
              <button>GALLERY</button>
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
