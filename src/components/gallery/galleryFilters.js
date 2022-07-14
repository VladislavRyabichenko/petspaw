import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { fetchImages } from "../../reducers/gallerySlice";
import { fetchBreeds } from "../../reducers/gallerySlice";

export function GalleryFilters() {
  const dispatch = useDispatch();

  const imagesSelected = useSelector((state) => state.gallery.images);
  const breedsSelected = useSelector((state) => state.gallery.breeds);
  // const [breeds, setBreeds] = useState([])

  // useEffect(()=>{
  //     dispatch(fetchBreeds())
  //     setBreeds(breedsSelected)
  // },[])

  return (
    <div className="gallery--filters">
      <div>
        <p>Order</p>
        <select defaultValue="">
          <option value="">Random</option>
          <option value="desc">DESC</option>
          <option value="asc">ASC</option>
        </select>
      </div>

      <div>
        <p>Type</p>
        <select
          onChange={(e) => {
            dispatch({
              type: "gallery/setTypeFilter",
              payload: e.target.value,
            });
          }}
          defaultValue=""
        >
          <option value="jpg,png,gif">All</option>
          <option value="jpg,png">Static</option>
          <option value="gif">Animated</option>
        </select>
      </div>

      <div>
        <p>Breed</p>
        <select
          defaultValue=""
          onChange={(e) =>
            dispatch({
              type: "gallery/setBreedFilter",
              payload: e.target.value,
            })
          }
        >
          <option value="">None</option>
          {breedsSelected.map((breed, idx) => {
            return (
              <option value={breed.id} key={idx}>
                {breed.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <p>Limit</p>
        <select
          defaultValue=""
          onChange={(e) => {
            dispatch({
              type: "gallery/setLimitFilter",
              payload: e.target.value,
            });
          }}
        >
          <option value="5">5 items</option>
          <option value="10">10 items</option>
          <option value="15">15 items</option>
          <option value="20">20 items</option>
        </select>
      </div>
    </div>
  );
}
