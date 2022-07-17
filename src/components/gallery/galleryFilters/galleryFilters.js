import React from "react";
import { useDispatch, useSelector } from "react-redux";

import stylesGalleryFilters from "./galleryFilters.module.scss";

import { useEffect, useState } from "react";
import { fetchImages } from "../../../reducers/gallerySlice";
import { fetchBreeds } from "../../../reducers/gallerySlice";
import { TYPE_FILTER } from "../../../constants/filtersValues";
import { LIMIT_FILTER } from "../../../constants/filtersValues";
import { ORDER_FILTER } from "../../../constants/filtersValues";
import { BREED_FILTER } from "../../../constants/filtersValues";
import { FilterSelect } from "./filterSelect";
import { ButtonReload } from "../../buttons/buttonReload";

export function GalleryFilters() {
  const dispatch = useDispatch();

  const imagesSelected = useSelector((state) => state.gallery.images);
  const breedsSelected = useSelector((state) => state.gallery.breeds);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    dispatch(fetchBreeds());
    setBreeds(breedsSelected);

    console.log("breeds,slected:", breedsSelected);
    console.log("breeds", breeds);
  }, []);

  return (
    <div className={stylesGalleryFilters.galleryFilters}>
      <FilterSelect
        props={{
          ...TYPE_FILTER,
          callback: (e) => {
            dispatch({
              type: "gallery/setTypeFilter",
              payload: e.target.value,
            });
          },
        }}
      />
      <FilterSelect
        props={{
          ...ORDER_FILTER,
          callback: (e) => {
            dispatch({
              type: "gallery/setOrderFilter",
              payload: e.target.value,
            });
          },
        }}
      />
      <FilterSelect
        props={{
          ...BREED_FILTER,
          optionValues: [...BREED_FILTER.optionValues, ...breedsSelected],
          callback: (e) => {
            dispatch({
              type: "gallery/setBreedFilter",
              payload: e.target.value,
            });
          },
        }}
      />
      <FilterSelect
        props={{
          ...LIMIT_FILTER,
          callback: (e) => {
            dispatch({
              type: "gallery/setLimitFilter",
              payload: e.target.value,
            });
          },
        }}
      />

      <div>
        <ButtonReload
          props={{
            imgName: "icon-reload.svg",
          }}
        />
      </div>
    </div>
  );
}
