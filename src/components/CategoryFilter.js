import React from "react";

function CategoryFilter({categories, selectedCat, classChange, onDelete}) {
 

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((cat) => {
        const thingIdontGet = cat === selectedCat ? 'selected' : null 
        return(
          <button key={cat} className={thingIdontGet} onClick={() => {
            classChange(cat)}}>
          {cat}
        </button>)
      })}
    </div>
  );
}

export default CategoryFilter;


