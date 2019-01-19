import React from "react";
import "./SearchResults.css";
const SearchResults = props => (
 <div className="results">
  
   <div className="item">
   <h3>Drug Info</h3>
    <p>{props.results}</p>
   </div>
   <div className="item">
   <h3>Box Warnings</h3>
    <p>{props.results2}</p>
   </div>
 </div>
);
export default SearchResults;
