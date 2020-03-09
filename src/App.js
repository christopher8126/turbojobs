import React from "react";
import "./App.css";
import Navigation from "./components/layouts/Navigation/Navigation";
import Banner from "./components/layouts/Banner/Banner";
import LocationSearch from "./components/layouts/LocationSearch/LocationSearch";
import Featured from "./components/layouts/Featured/Featured";
import ServiceCategoryFinder from "./components/layouts/ServiceCategoryFinder/ServiceFinderCategory";
import Footer from "./components/layouts/Footer/Footer";
import OtherOffer from "./components/layouts/OtherOffers/OtherOffers";

function App() {
  return (
    <>
      <Navigation />
      <Banner />
      <div className="container" style={{ marginTop: "12px" }}>
        <LocationSearch />
      </div>
      <Featured />
      <ServiceCategoryFinder />
      <OtherOffer />
      <Footer />
    </>
  );
}

export default App;
