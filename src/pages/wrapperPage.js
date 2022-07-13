import React from "react";

import { Outlet } from "react-router-dom";

export function WrapperPage() {
  return (
    <div className="pages-wrapper">
      <h1>Wrapper Page</h1>
      <Outlet />
    </div>
  );
}
