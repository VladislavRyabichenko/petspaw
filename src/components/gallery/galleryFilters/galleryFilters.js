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

  // useEffect(() => {
  //   dispatch(fetchBreeds());
  //   setBreeds(breedsSelected);
  //   console.log("BREEDS", breeds);
  // }, []);

  return (
    <div className={stylesGalleryFilters.galleryFilters}>
      <FilterSelect
        props={{
          ...TYPE_FILTER,
          callback: () => console.log("TYPE filter change"),
        }}
      />
      <FilterSelect
        props={{
          ...ORDER_FILTER,
          callback: () => console.log("ORDER filter change"),
        }}
      />
      <FilterSelect
        props={{
          ...BREED_FILTER,
          callback: () => console.log("Breed filter change"),
        }}
      />
      <FilterSelect
        props={{
          ...TYPE_FILTER,
          callback: () => console.log("TYPE filter change"),
        }}
      />

      <div>
        <ButtonReload
          props={{
            imgName: "icon-reload.svg",
          }}
        />
        {/*<button>*/}
        {/*  <img src="./images/components/icon-reload.svg" alt="" />*/}
        {/*</button>*/}
      </div>
    </div>
    //   <div className={stylesGalleryFilters.galleryFilters}>
    //     <div>
    //       <p>Order</p>
    //       <select defaultValue="">
    //         <option value="">Random</option>
    //         <option value="desc">DESC</option>
    //         <option value="asc">ASC</option>
    //       </select>
    //     </div>
    //
    //     <div>
    //       <p>Type</p>
    //       <select
    //         onChange={(e) => {
    //           dispatch({
    //             type: "gallery/setTypeFilter",
    //             payload: e.target.value,
    //           });
    //         }}
    //         defaultValue=""
    //       >
    //         <option value="jpg,png,gif">All</option>
    //         <option value="jpg,png">Static</option>
    //         <option value="gif">Animated</option>
    //       </select>
    //     </div>
    //
    //     <div>
    //       <p>Breed</p>
    //       <select
    //         defaultValue=""
    //         onChange={(e) =>
    //           dispatch({
    //             type: "gallery/setBreedFilter",
    //             payload: e.target.value,
    //           })
    //         }
    //       >
    //         <option value="">None</option>
    //         {breedsSelected.map((breed, idx) => {
    //           return (
    //             <option value={breed.id} key={idx}>
    //               {breed.name}
    //             </option>
    //           );
    //         })}
    //       </select>
    //     </div>
    //
    //     <div>
    //       <p>Limit</p>
    //       <select
    //         defaultValue=""
    //         onChange={(e) => {
    //           dispatch({
    //             type: "gallery/setLimitFilter",
    //             payload: e.target.value,
    //           });
    //         }}
    //       >
    //         <option value="5">5 items</option>
    //         <option value="10">10 items</option>
    //         <option value="15">15 items</option>
    //         <option value="20">20 items</option>
    //       </select>
    //     </div>
    //   </div>
  );
}
