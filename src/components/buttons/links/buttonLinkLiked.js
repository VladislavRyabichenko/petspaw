import React from "react";
import styles from "./styles/buttonLinks.module.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function ButtonLinkLiked() {
  // let src = "./images/components/".concat(props.imgName);
  return (
    <div className={styles.btnWrapper}>
      <button>
        <Link to="/liked">
          <img
            src="./images/components/button-link-icon-liked.svg"
            alt="Liked"
          />
        </Link>
      </button>
    </div>
  );
}
