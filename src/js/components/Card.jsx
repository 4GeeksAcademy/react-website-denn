import React from "react"



const Card = (props) => {
  
  return (
   
      <div className="card m-4" style={{ width: "18rem", paddingTop:"15px", background: "#e3f6d7ff"}}>
        <div className="card-img-wrapper">
          <img src={props.imagen} alt={props.service} />
        </div>

        <div className="card-body">
          <h5>{props.service}</h5>
          <p>{props.description}</p>
          <a href={props.buttonLink} className="btn btn-light">reservar</a>
        </div>
      </div>
   
  );
};
export default Card;