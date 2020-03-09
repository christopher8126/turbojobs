import React from "react";
import "./Banner.css";
import app from "../../../app-store.svg";
import play from "../../../play-store.svg";
import videobg from "../../../video-bg.mp4";

function Banner() {
  return (
    <div
      className="banner"
      style={{ justifyContent: "center", alignItems: "center", color: "white" }}
    >
      <div className="fullscreen-video-wrap">
        <div className="overlay"></div>
        <video src={videobg} autoPlay={true} loop={true} />
      </div>
      <div className="row container" id="slog" style={{ paddingTop: "10vh" }}>
        <div className="col">
          <div>
            <h1>
              Short Website <br />
              Slogan Goes <br />
              Here
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              voluptatum cum reprehenderit tempore mollitia iusto iure cumque
              labore doloremque illo? Vel mollitia voluptatibus qui delectus
              deleniti excepturi exercitationem nostrum iusto, impedit nisi. Ab
              ex quas expedita quidem sequi illum labore atque nemo ipsam.
            </p>
            <div>
              <hr />
              <h4>Get Our App</h4>
              <img src={app} />
              <img src={play} />
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Banner;
