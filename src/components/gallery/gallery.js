import React, { useEffect } from "react";
import stylesGallery from "./styles/gallery.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { GalleryFilters } from "./galleryFilters/galleryFilters";
import { GalleryNavBar } from "./galleryNavBar/galleryNavBar";
import { Loading } from "../loading/loading";
import { GalleryImages } from "./galleryImages/galleryImages";
import { fetchImages } from "../../reducers/gallerySlice";
import { Pagination } from "../buttons/paginationButtons";

export function Gallery() {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.gallery.status);
  const filtersSelected = useSelector((state) => state.gallery.filters);

  // let [displayedEntities, setDisplayedEntities] = useState([])
  // // чтобы присвоить значения в случае
  // // если сайт открыть сразу на странице галерее,
  // // а не перейти с главного екрана
  // useEffect(()=>{
  //     setDisplayedEntities(imagesSelected)
  // },[imagesSelected])

  useEffect(() => {
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

      {status === "loading" ? <Loading /> : <GalleryImages />}

      {/*<Pagination />*/}
    </div>
  );
}
