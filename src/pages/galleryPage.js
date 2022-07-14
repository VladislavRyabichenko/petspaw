import React from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { Gallery } from "../components/gallery/gallery";

export function GalleryPage() {
  let nav = useNavigate();
  return (
    <div>
      <Gallery />
      <Outlet />
    </div>
  );
}
