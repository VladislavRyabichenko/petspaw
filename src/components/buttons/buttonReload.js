import React from "react";
import btnStyles from "./styles/buttonStyles.module.scss";
import { useDispatch } from "react-redux";

export function ButtonReload({ props }) {
  const dispatch = useDispatch();
  let src = "./images/components/".concat(props.imgName);
  return (
    <button
      className={btnStyles.btn}
      onClick={() => {
        dispatch({
          type: "gallery/setDefaultFilters",
        });
      }}
    >
      <img src={src} alt="btn" />
    </button>
  );
}
