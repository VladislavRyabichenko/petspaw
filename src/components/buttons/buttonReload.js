import React from "react";
import btnStyles from "./styles/buttonStyles.module.scss";

export function ButtonReload({ props }) {
  let src = "./images/components/".concat(props.imgName);
  return (
    <button className={btnStyles.btn}>
      <img src={src} alt="btn" />
    </button>
  );
}
