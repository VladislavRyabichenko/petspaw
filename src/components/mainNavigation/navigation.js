import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import stylesNavigation from "./styles/styleNavigation.module.scss";

import classNames from "classnames";
// import { ButtonCallMenu } from "../buttons/buttonCallMenu";
import { ButtonCancel } from "../buttons/buttonCancel";

export function Navigation({ props }) {
  const isMenu = props.isMenu;
  const cancelMenu = props.cancelMenu;
  console.log("MAin nav isMenu :", isMenu);

  let classes = classNames(stylesNavigation.mainNavigationStick, {
    [stylesNavigation.showMenu]: isMenu,
  });

  return (
    <div className={classes}>
      <div className={stylesNavigation.logoWrapper}>
        <Link to="/">
          <div className={stylesNavigation.logo}>
            <img src="./images/logo.svg" alt="LOGO" />
            <span>PetsPaw</span>
          </div>
        </Link>

        <div className={stylesNavigation.cancelWrapper}>
          {/*<button onClick={() => cancelMenu()}>CANCELL</button>*/}
          <ButtonCancel props={{ callback: () => cancelMenu() }} />
        </div>
      </div>

      <div className={stylesNavigation.welcomeText}>
        <span className={stylesNavigation.greetings}>Hi intern</span>
        <span className={stylesNavigation.welcome}>
          Welcome to MI 2022 Front-end test
        </span>
        {/*<h3>Let's start using the Cats API</h3>*/}
      </div>

      <div className={stylesNavigation.mainNavigationLinks}>
        <div
          onClick={() => {
            return isMenu ? cancelMenu() : "";
          }}
          className={stylesNavigation.menuItem}
        >
          <Link to="/voting">
            <div className={stylesNavigation.navigationIcon}>
              <img src="./images/menu-icon-voting.png" alt="voting" />
            </div>

            <div className={stylesNavigation.navigationButton}>
              <button>VOTING</button>
            </div>
          </Link>
        </div>

        <div className={stylesNavigation.menuItem}>
          <Link to="/breeds">
            <div
              className={stylesNavigation.navigationIcon}
              onClick={() => {
                return isMenu ? cancelMenu() : "";
              }}
            >
              <img src="./images/menu-icon-breeds.png" alt="voting" />
            </div>

            <div className={stylesNavigation.navigationButton}>
              <button>BREEDS</button>
            </div>
          </Link>
        </div>

        <div className={stylesNavigation.menuItem}>
          <Link to="/gallery">
            <div
              className={stylesNavigation.navigationIcon}
              onClick={() => {
                return isMenu ? cancelMenu() : "";
              }}
            >
              <img src="./images/menu-icon-gallery.png" alt="gallery" />
            </div>

            <div className={stylesNavigation.navigationButton}>
              <button>GAllERY</button>
            </div>
          </Link>
        </div>
      </div>
      {/*<Outlet />*/}
    </div>
  );
}
