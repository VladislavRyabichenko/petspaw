import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./image.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  postFavouriteImage,
  updateFavourites,
} from "../../../reducers/votingSlice";

export function Image({ props, fav = false }) {
  const dispatch = useDispatch();
  const selectedFavourites = useSelector((state) => state.voting.favourites);

  const data = props.elem;

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (Object.keys(selectedFavourites).includes(data.id)) {
      setLiked(true);
    }
  }, [selectedFavourites]);

  let src = liked
    ? "./images/components/icon-btn-liked-active.svg"
    : "./images/components/icon-btn-like.svg";

  return (
    <div className={styles.overlay}>
      <div className={styles.background}>
        <div className={styles.link}>
          <button>
            <img
              onClick={() => {
                setLiked(!liked);
                dispatch(updateFavourites(data.id));
              }}
              src={src}
              alt="like"
            />
          </button>
        </div>
      </div>

      <img
        className={styles.image}
        onClick={() => console.log(`IMG clicked ${data.id}`)}
        src={data.url}
        alt={data.id}
      />
    </div>
  );
}
