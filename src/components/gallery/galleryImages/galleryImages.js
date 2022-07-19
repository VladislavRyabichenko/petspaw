import React from "react";
import stylesGallery from "../styles/gallery.module.scss";
import { Image } from "../imageComponent/image";
import { useSelector } from "react-redux";
import { Pagination } from "../../buttons/paginationButtons";

export function GalleryImages() {
  let imagesSelected = useSelector((state) => state.gallery.images);

  let showAlternativeTemplate = false;

  return (
    <>
      <div className={stylesGallery.galleryImages}>
        {imagesSelected.map((chunk, idx) => {
          return (
            <div key={idx} className={stylesGallery.galleryImageChunk}>
              {chunk.map((elem, idx) => {
                let template = showAlternativeTemplate
                  ? stylesGallery.imageWrapperAlternative
                  : stylesGallery.imageWrapper;

                if (idx + 1 === 5) {
                  showAlternativeTemplate = !showAlternativeTemplate;
                }

                return (
                  <div className={template} key={idx}>
                    <Image props={{ elem, template }} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <Pagination />
    </>
  );
}
