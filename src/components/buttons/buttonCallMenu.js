import React from "react";
import btnStyles from "./styles/buttonStyles.module.scss";
import { useNavigate } from "react-router-dom";

export function ButtonCallMenu({ props }) {
  const callback = props.callback;

  // let src = "./images/components/".concat(props.imgName);
  return (
    <button className={btnStyles.btn} onClick={() => callback()}>
      <img src="./images/components/icon-btn-back.svg" alt="btn" />
    </button>
  );
}
