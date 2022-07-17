import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./image.module.scss";

export function Image({ props, template }) {
  const data = props.elem;
  const [liked, setLiked] = useState(false);

  let src = liked
    ? "./images/components/icon-btn-liked-active.svg"
    : "./images/components/icon-btn-like.svg";

  console.log("state image like", src);

  return (
    // <div className={template}>
    <div className={styles.overlay}>
      <div className={styles.background}>
        <div className={styles.link}>
          <button>
            <img onClick={() => setLiked(!liked)} src={src} alt="like" />
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
