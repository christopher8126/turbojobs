import React from "react";
import "./CategoryCard.css";

function CategoryCard() {
  return (
    <div className="col" style={{ marginBottom: "4px" }}>
      <div
        className="categ-card-shadow"
        style={{
          margin: "4px",
          backgroundColor: "white",
          cursor: "pointer"
        }}
      >
        <p>Category</p>
      </div>
    </div>
  );
}

export default CategoryCard;
