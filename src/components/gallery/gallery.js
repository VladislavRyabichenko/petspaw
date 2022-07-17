import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GalleryFilters } from "./galleryFilters/galleryFilters";
import { fetchImages } from "../../reducers/gallerySlice";

import { GalleryNavBar } from "./galleryNavBar/galleryNavBar";

import stylesGallery from "./styles/gallery.module.scss";
import { Image } from "./imageComponent/image";

export function Gallery() {
  const dispatch = useDispatch();

  let imagesSelected = useSelector((state) => state.gallery.images);

  console.log("IMAGES selected", imagesSelected);

  const filtersSelected = useSelector((state) => state.gallery.filters);

  let showAlternativeTemplate = false;

  // let [displayedEntities, setDisplayedEntities] = useState([])
  // // чтобы присвоить значения в случае
  // // если сайт открыть сразу на странице галерее,
  // // а не перейти с главного екрана
  // useEffect(()=>{
  //     setDisplayedEntities(imagesSelected)
  // },[imagesSelected])

  console.log("images", imagesSelected);

  useEffect(() => {
    console.log("FIlters", filtersSelected);
    dispatch(fetchImages(filtersSelected));
  }, [filtersSelected]);

  return (
    <div className={stylesGallery.galleryWrapper}>
      <div>
        <GalleryNavBar />
      </div>

      <div className="gallery--filters">
        <GalleryFilters />
      </div>

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
                    {/*<div className={stylesGallery.overlay}></div>*/}
                    <Image props={{ elem, template }} />

                    {/*<img src={elem.url} alt="idx" />*/}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className={stylesGallery.paginationWrapper}></div>
    </div>
  );
}
