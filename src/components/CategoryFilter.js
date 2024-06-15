import React, { useState } from "react";

function CategoryFilter({ categories, onSelected }) {
  const [selected, setSelected] = useState("All");
  function handleClick(category) {
    setSelected(category);

    onSelected(selected);
  }
  const button = categories.map((category, index) => {
    return (
      <button
        key={index}
        className={selected === category ? "selected" : ""}
        onClick={() => handleClick(category)}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {button}
    </div>
  );
}

export default CategoryFilter;
