import React from "react";
import { useNavigate } from "react-router-dom";
import navBarStyles from "./galleryNavBar.module.scss";

import { ButtonBack } from "../../buttons/buttonBack";
import { ButtonUpload } from "../../buttons/buttonUpload";

export function GalleryNavBar() {
  const nav = useNavigate();
  return (
    <div className={navBarStyles.galleryNavBar}>
      <div className={navBarStyles.backButtonWrapper}>
        <ButtonBack />
      </div>
      <div className={navBarStyles.titlePage}>
        <span>GALLERY</span>
      </div>
      <div className={navBarStyles.uploadButtonWrapper}>
        <ButtonUpload />
      </div>
    </div>
  );
}
