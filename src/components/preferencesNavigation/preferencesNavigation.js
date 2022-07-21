import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/preferencesNavigation.module.scss";

import { ButtonLinkFavourites } from "../buttons/links/buttonLinkFavourites";
import { ButtonLinkLiked } from "../buttons/links/buttonLinkLiked";
import { ButtonLinkDisliked } from "../buttons/links/buttonLinkDisliked";
import { ButtonOpenMenu } from "../buttons/buttonOpenMenu";

export function PrefNavigation({ props }) {
  const showMenu = props.showMenu;

  return (
    <div className={styles.prefNavWrapper}>
      <div className={styles.menuIcon}>
        {/*<button onClick={() => showMenu()}>CLICK</button>*/}
        <ButtonOpenMenu props={{ callback: showMenu }} />
      </div>

      <div className={styles.searchWrapper}>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder="Search for breeds by name" />
        </div>
        <div className={styles.buttonWrapper}>
          <button>
            <img src="./images/components/icon-search.svg" alt="" />
          </button>
        </div>
      </div>

      <div className={styles.navLinks}>
        <ButtonLinkLiked />
        <ButtonLinkFavourites />
        <ButtonLinkDisliked />

        {/*<div>*/}
        {/*  <Link to="/liked">*/}
        {/*    <img src="./images/components/icon-link-liked.svg" alt="" />*/}
        {/*  </Link>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <Link to="/disliked">*/}
        {/*    <img src="./images/components/icon-link-disliked.svg" alt="" />*/}
        {/*  </Link>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <Link to="/favorite">*/}
        {/*    <img src="./images/components/icon-link-favourites.svg" alt="" />*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
