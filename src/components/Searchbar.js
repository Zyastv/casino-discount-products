import React from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";

function Searchbar({ placeholder, data }) {
  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' placeholder={placeholder} />
        <div className='search-icon'>
          <SearchIcon />
        </div>
      </div>
      <div className='dataResult'></div>
    </div>
  );
}

export default Searchbar;
