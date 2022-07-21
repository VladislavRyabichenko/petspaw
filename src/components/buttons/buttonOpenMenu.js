import React from "react";
import btnStyles from "./styles/buttonStyles.module.scss";
import { useNavigate } from "react-router-dom";

export function ButtonOpenMenu({ props }) {
  const callback = props.callback;

  // let src = "./images/components/".concat(props.imgName);
  return (
    <button className={btnStyles.btn} onClick={() => callback()}>
      <img src="./images/components/icon-btn-open-menu.svg" alt="btn" />
    </button>
  );
}
