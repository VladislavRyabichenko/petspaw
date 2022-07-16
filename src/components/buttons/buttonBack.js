import React from "react";
import btnStyles from "./styles/buttonStyles.module.scss";

export function ButtonBack() {
  return (
    <button className={btnStyles.btnBack}>
      <img src="./images/components/icon-btn-back.svg" alt="btn" />
    </button>
  );
}
