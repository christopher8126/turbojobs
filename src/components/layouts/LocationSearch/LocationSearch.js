import React from "react";
import "./LocationSearch.css";

function LocationSearch() {
  return (
    <div
      className="jumbotron jumbotron-fluid loc-card"
      style={{ padding: "32px 0" }}
    >
      <div className="container">
        <h4>Search</h4>
        <div className="row">
          <div className="col">
            <input
              class="form-control"
              type="text"
              placeholder="Seach Keyword"
            />
          </div>
          <div className="col">
            <input class="form-control" type="text" placeholder="Location" />
          </div>
          <div className="col">
            <select class="form-control">
              <option>Categ1</option>
              <option>Categ2</option>
            </select>
          </div>
          <div className="col">
            <label for="customRange1">Example range</label>
            <input type="range" class="custom-range" id="customRange1" />
          </div>
          <div className="col">
            <button type="button" class="btn btn-success">
              <i class="fas fa-search"></i> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationSearch;
