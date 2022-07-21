import React, { useRef, useState } from "react";
import styles from "../upload.module.scss";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../../../reducers/gallerySlice";
import classNames from "classnames";

// import { getFavouriteImages } from "../../../../reducers/votingSlice";
// import { fetchFavourites } from "../../../voting/votingAPI/votingAPI";

export const sendImage = async (data) => {
  console.log("data,", data);
  let url = "https://api.thecatapi.com/v1";
  let response = await fetch("https://api.thecatapi.com/v1/images/upload", {
    method: "POST",
    // withCredentials: true,
    headers: {
      // "content-Type": "multipart/form-data",
      "x-api-key": "1a47e138-6a44-4723-933c-0e7fd2675591",
    },
    body: data,
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log("set", data);
      return data;
    })
    .catch((error) => {
      console.log("err");
    });
  return await response;
};

export function Dropzone() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploadFailed, setUploadFailed] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFile = (file) => {
    //you can carry out any file validations here...
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleOndragOver = (event) => {
    event.preventDefault();
  };
  const handleOndrop = (event) => {
    //prevent the browser from opening the image
    event.preventDefault();
    event.stopPropagation();
    //let's grab the image file
    let imageFile = event.dataTransfer.files[0];
    handleFile(imageFile);
  };

  const fileInput = useRef(null);

  let dropZoneClassNames = classNames(
    styles.dropZone,
    {
      [styles.failed]: uploadFailed,
    },
    {
      [styles.success]: uploadSuccess,
    }
  );

  console.log("CLASSNAMES", dropZoneClassNames);

  return (
    <div className={styles.wrapper}>
      <div
        // className={styles.dropZone}
        className={dropZoneClassNames}
        onDragOver={handleOndragOver}
        onDrop={handleOndrop}
        onClick={() => fileInput.current.click()}
      >
        <div>
          <div className={styles.dragText}>
            <span>Click to select or Drag and drop image here....</span>
          </div>
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInput}
          hidden
          onChange={(e) => handleFile(e.target.files[0])}
        />
        {previewUrl && (
          <div className={styles.previewImg}>
            <img src={previewUrl} alt="image" />
          </div>
        )}
      </div>

      {previewUrl && (
        <div className={styles.sendImageWrapper}>
          <span> Image File Name: {image.name} </span>
          <button
            onClick={async () => {
              let formData = new FormData();
              formData.append("file", image);
              let response = await sendImage(formData);

              if (response["status"] === 400) {
                setUploadFailed(true);
                return;
              }
              setUploadSuccess(true);
              // dispatch(uploadImage(formData));
            }}
          >
            UPLOAD IMAGE
          </button>
        </div>
      )}
      <div></div>
    </div>
  );
}
