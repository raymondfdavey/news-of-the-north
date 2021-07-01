import React from "react";

function SortByDropper(props) {
  return (
    <div>
      <div>
        <h1>Sort By</h1>
        <select
          id="sortTerms"
          name="sortTerms"
          defaultValue=""
          onChange={event => {
            return props.changeSort(event.target.value);
          }}
        >
          <option defaultValue value="comment_count">
            Number of Comments
          </option>
          <option value="created_at">Date Created</option>
          <option value="votes">Number of Votes</option>
        </select>
      </div>
    </div>
  );
}

export default SortByDropper;
