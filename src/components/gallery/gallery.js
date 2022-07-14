import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GalleryFilters } from "./galleryFilters";
import { fetchImages } from "../../reducers/gallerySlice";

import { GalleryNavBar } from "./galleryNavBar";

export function Gallery() {
  const dispatch = useDispatch();

  let imagesSelected = useSelector((state) => state.gallery.images);
  const filtersSelected = useSelector((state) => state.gallery.filters);

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
    // <div></div>
    <div className="gallery--wrapper">
      <div>
        <GalleryNavBar />
      </div>

      <div className="gallery--filters">
        <GalleryFilters />
      </div>

      <div className="gallery--images">
        {imagesSelected.map((chunk, idx) => {
          return (
            <div className="gallery--images---chunk">
              {chunk.map((elem, idx) => {
                return (
                  <div className="gallery--images---image-wrapper" key={idx}>
                    <img
                      src={elem.url}
                      // style={{
                      //     width: 50 + 'px'
                      // }}
                      alt="idx"
                    />
                  </div>
                );
              })}
            </div>
          );

          // return (
          //     (
          //         <div className="gallery--images---image-wrapper" key={idx}>
          //             <img
          //                 src={dataObj.url}
          //                 // style={{
          //                 //     width: 50 + 'px'
          //                 // }}
          //                 alt="idx"/>
          //         </div>
          //     )
          // )
        })}
      </div>
    </div>
  );
}
