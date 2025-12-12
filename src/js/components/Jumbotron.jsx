import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron py-4 px-4 mx-2 my-2 rounded-3" style={{background: "#e3f6d7ff"}}>
            <h1 className="display-4">Nivier Nails & Stetic</h1>
            <p className="lead">Hands Up! Tu estetica favorita ha llegado a Madrid! </p>
            <hr className="my-4"/>
                <p>Reserva tu cita </p>
                <p className="lead">
                    <a className="btn btn-light" href="#" role="button">Click here</a>
                </p>
        </div>
    )
}
export default Jumbotron;