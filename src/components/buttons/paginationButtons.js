import React from "react";
import styles from "./styles/buttonStyles.module.scss";
import { useDispatch, useSelector } from "react-redux";

export function Pagination() {
  const dispatch = useDispatch();

  const currPage = useSelector((state) => state.gallery.filters.page);
  return (
    <div className={styles.pagination}>
      <div>
        <button
          onClick={() => {
            dispatch({
              type: "gallery/setPage",
              payload: currPage === 0 ? 0 : currPage - 1,
            });
          }}
        >
          PREV
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({
              type: "gallery/setPage",
              payload: currPage + 1,
            });
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
