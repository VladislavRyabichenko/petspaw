import React, { useEffect } from "react";

import { Outlet } from "react-router-dom";
import { PrefNavigation } from "../components/preferencesNavigation/preferencesNavigation";

import styles from "../css/app.module.scss";
import { useState } from "react";
import { logDOM } from "@testing-library/react";
export function WrapperPage({ props }) {
  // console.log(setWrapperRendered);

  useEffect(() => {
    const setWrapperRendered = props.setWrapperRendered;
    setWrapperRendered(true);
    return () => {
      console.log("here");
      setWrapperRendered(false);
    };
    // let paramsString = document.location;
    // console.log("URL", paramsString);
  });

  return (
    <div className={styles.pageWrapper}>
      <PrefNavigation
        props={{
          showMenu: props.showMenu,
        }}
      />
      <div className={styles.pageContent}>
        <Outlet />
      </div>
      {/*<h1>Wrapper Page</h1>*/}
    </div>
  );
}
