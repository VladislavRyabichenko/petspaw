import React from "react";
import stylesFilterSelect from "./galleryFilters.module.scss";
import { useSelector } from "react-redux";

export function FilterSelect({ props }) {
  const filterType = props.type;
  const optionValues = props.optionValues;
  const callBack = props.callback;

  const filterVal = useSelector(
    (state) => state.gallery.filters[filterType.toLowerCase()]
  );

  return (
    <div className={stylesFilterSelect.filterSelectWrapper}>
      <p>{filterType}</p>
      <select onChange={(e) => callBack(e)} value={filterVal}>
        {optionValues.map((dataObj, idx) => {
          return (
            <option key={idx} value={dataObj.value}>
              {dataObj.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
