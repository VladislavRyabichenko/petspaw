import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export function StartScreen() {
  return (
    <div>
      <h1>Start Screen</h1>
      <Outlet />
    </div>
  );
}
