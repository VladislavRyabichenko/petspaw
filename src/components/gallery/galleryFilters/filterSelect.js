import React from "react";
import stylesFilterSelect from "./galleryFilters.module.scss";

export function FilterSelect({ props }) {
  console.log("props", props);
  const filterType = props.type;
  const optionValues = props.optionValues;
  const callBack = props.callback;

  return (
    <div className={stylesFilterSelect.filterSelectWrapper}>
      <p>{filterType}</p>
      <select onChange={(e) => callBack(e)} defaultValue="">
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
