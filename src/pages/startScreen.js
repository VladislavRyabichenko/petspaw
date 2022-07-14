import React from "react";
import { Outlet } from "react-router-dom";
import { Banner } from "../components/startBanner/banner";

export function StartScreen() {
  return (
    <>
      <Banner />
    </>
  );
}
