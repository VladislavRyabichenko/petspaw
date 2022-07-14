import React from "react";

import bannerStyles from "./banner.module.scss";

export function Banner() {
  return (
    <div className={bannerStyles.bannerBg}>
      <div className={bannerStyles.backgroundWrapper}>
        <div className={bannerStyles.background}>
          <img src="./images/girl-and-pet.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
