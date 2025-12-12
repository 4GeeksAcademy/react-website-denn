import React from "react"



const Card = (props) => {
  
  return (
    <div className="card m-4 " style={{ width: "18rem", paddingTop:"15px", background: "#e3f6d7ff" }}>
      <img src={props.imagen} className="card-img-top" />
      <div className="card-body">
        <h5>{props.service}</h5>
        <p>{props.description}</p>
        <a href={props.buttonLink} className="btn btn-light">reservar</a>
      </div>
    </div>
  );
};
export default Card;