import React from "react";
import ContactItems from "../contactItems/ContactItems";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBox = () => {
  return (
    <>
      <div className="serchbox-wrap">
        <input
          type="text"
          placeholder="Search by name or number"
          id="search-box"
        />
        <FontAwesomeIcon icon={faSearch} id="search-icon" />
      </div>
      <ContactItems />
    </>
  );
};
