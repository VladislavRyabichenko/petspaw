import React from "react";

import { Outlet } from "react-router-dom";
import { PrefNavigation } from "../components/preferencesNavigation/preferencesNavigation";

export function WrapperPage() {
  return (
    <div className="pages-wrapper">
      <PrefNavigation />
      {/*<h1>Wrapper Page</h1>*/}
      <Outlet />
    </div>
  );
}
