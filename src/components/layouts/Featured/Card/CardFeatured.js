import React from "react";
import "./CardFeatured.css";

function CardFeatured(props) {
  // console.log(props.data);
  const { owner, categ, name, desc, img } = props.data;
  return (
    <div
      className="card box"
      style={{
        width: "18rem",
        marginBottom: "28px",
        // border: ".5px solid rgba(00,00,00,0.5)",
        borderRadius: "12px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}
    >
      <div className="" style={{ display: "flex", padding: "8px" }}>
        <div
          style={{
            height: " 50px",
            width: "50px"
            // backgroundColor: "rgba(00,00,00,0.5)"
          }}
        >
          <span style={{ fontSize: "36px", marginLeft: "8px", color: "red" }}>
            <i class="fas fa-user-circle"></i>
          </span>
        </div>
        <div>
          <h5 className="card-text" style={{ marginBottom: "0px" }}>
            {owner}
          </h5>
          <small className="card-title">{categ}</small>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            bottom: "8px",
            right: "16px",
            backgroundColor: "rgba(ff,ff,ff, 0.4)"
            // fontsize: "18px"
          }}
        >
          <div className="chip">
            <div className="chip-content">$ 69</div>
          </div>
        </div>
        <img src={img} className="card-img-top" alt="..." />
      </div>
      <div className="card-body" style={{ padding: "12px" }}>
        <small>
          <i class="fas fa-map-marker-alt"></i> address address
        </small>
        <h5 className="card-title">{name}</h5>
        <p className="card-text" style={{ padding: "4px" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default CardFeatured;
