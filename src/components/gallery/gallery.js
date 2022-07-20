import React, { useEffect } from "react";
import stylesGallery from "./styles/gallery.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { GalleryFilters } from "./galleryFilters/galleryFilters";
import { GalleryNavBar } from "./galleryNavBar/galleryNavBar";
import { Loading } from "../loading/loading";
import { GalleryImages } from "./galleryImages/galleryImages";
import { fetchImages } from "../../reducers/gallerySlice";

import { getFavouriteImages } from "../../reducers/votingSlice";
import { Upload } from "./modalUpload/modal";

export function Gallery() {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.gallery.status);
  const filtersSelected = useSelector((state) => state.gallery.filters);

  // let [displayedEntities, setDisplayedEntities] = useState([])
  // // чтобы присвоить значения в случае
  // // если сайт открыть сразу на странице галерее,
  // // а не перейти с главного екрана
  // useEffect(()=>{
  //     setDisplaygitedEntities(imagesSelected)
  // },[imagesSelected])

  useEffect(() => {
    dispatch(fetchImages(filtersSelected));
    dispatch(getFavouriteImages());
  }, [filtersSelected]);

  return (
    <div className={stylesGallery.galleryWrapper}>
      {/*<Upload />*/}
      <div>
        <GalleryNavBar />
      </div>

      <div className="gallery--filters">
        <GalleryFilters />
      </div>

      {status === "loading" ? <Loading /> : <GalleryImages />}

      {/*<Upload />*/}
    </div>
  );
}
