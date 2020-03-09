import React, { Component } from "react";
import "./ServiceFinderCategory.css";

import CategoryCard from "./category/CategoryCard";

class ServiceFinderCategory extends Component {
  state = {
    isMobile: false
  };

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth <= 414 });
  };

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
    this.handleWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }
  render() {
    const rows = this.state.isMobile
      ? "row row-cols-2 categories-container"
      : "row row-cols-4 categories-container";
    return (
      <div className="container" style={{ marginTop: "12px" }}>
        <h1 className="title">Service Category Finder</h1>
        <div className={rows}>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    );
  }
}

export default ServiceFinderCategory;
