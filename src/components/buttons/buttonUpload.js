import React from "react";
import btnStyles from "./styles/buttonStyles.module.scss";

export function ButtonUpload() {
  return (
    <button className={btnStyles.btnUpload}>
      <img src="./images/components/icon-btn-upload.svg" alt="btn" />
      <span>UPLOAD</span>
    </button>
  );
}
