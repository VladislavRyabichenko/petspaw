import React from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";

export function GalleryPage() {
  let nav = useNavigate();
  return (
    <div>
      <Outlet />
    </div>
  );
}
