import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../store/products/actions";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => search(e.target.value)} />

        <div className="searchBtn">
          <button onClick={dispatch(search)}>Search</button>
        </div>
      </div>
    </div>
  );
}
