import React from "react";
import btnStyles from "./styles/buttonStyles.module.scss";
import { Link } from "react-router-dom";

export function ButtonUpload() {
  return (
    <Link to="/upload">
      <button className={btnStyles.btnUpload}>
        <img src="./images/components/icon-btn-upload.svg" alt="btn" />
        <span>UPLOAD</span>
      </button>
    </Link>
  );
}
