import React from "react";
import styles from "./upload.module.scss";
import { ButtonCancel } from "../../buttons/buttonCancel";
import { Dropzone } from "./dragNdrop/dragNdrop";

export function Upload() {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.upload}>
          <div className={styles.buttonWrapper}>
            <div>
              <ButtonCancel />
            </div>
          </div>
          <div className={styles.titleWrapper}>
            <span>Upload a .jpg or .png image</span>
          </div>
          <div className={styles.guidLinesTextWrapper}>
            <span>
              Any uploads must comply with the{" "}
              <a type="_blank" href="#">
                upload guidelines
              </a>
              or face deletion
            </span>
          </div>
          <div className={styles.dragndropWrapper}>
            <Dropzone />
          </div>
          {/*<div>*/}
          {/*  <div>1</div>*/}
          {/*  <div>1</div>*/}
          {/*  <div>1</div>*/}
          {/*  <div>1</div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}
