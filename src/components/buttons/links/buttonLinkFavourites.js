import React from "react";
import styles from "./styles/buttonLinks.module.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function ButtonLinkFavourites() {
  const dispatch = useDispatch();
  // let src = "./images/components/".concat(props.imgName);
  return (
    <div className={styles.btnWrapper}>
      <button>
        <Link to="/favourites">
          <img
            src="./images/components/button-link-icon-favourites.svg"
            alt="Favs"
          />
          {/*<img src="./images/components/icon-link-liked.svg" alt="" />*/}
        </Link>
      </button>
    </div>
  );
}
