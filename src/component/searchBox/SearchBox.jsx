import React, { useState } from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBox = () => {
  const [serchUser, setSearchUser] = useState("");
  const inputSearch = (e) => {
    setSearchUser(e.target.value);
    // console.log(searchUser);
  };
  return (
    <div className="search-container">
      <div className="serchbox-wrap">
        <input
          type="text"
          placeholder="Search by name or number"
          id="search-box"
          onChange={inputSearch}
        />
      </div>
      <FontAwesomeIcon icon={faSearch} id="search-icon" />
    </div>
  );
};
