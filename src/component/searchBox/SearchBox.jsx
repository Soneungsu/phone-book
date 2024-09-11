import React, { useState } from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBox = ({ onSearch }) => {
  const [serchUser, setSearchUser] = useState("");
  const inputSearch = (e) => {
    setSearchUser(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <div className="search-container">
      <div className="serchbox-wrap">
        <div className="input-inner">
          <input
            type="text"
            placeholder="Search by name or number"
            id="search-box"
            onChange={inputSearch}
          />
        </div>
        <div className="searchicon-wrap">
          <FontAwesomeIcon icon={faSearch} id="search-icon" />
        </div>
      </div>
    </div>
  );
};
