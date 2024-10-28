import React from "react";

// Estilos
const recuadros = {
  backgroundColor: "#181817",
  width: "60px",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
};
function SecondsCounter({
  numOne,
  numTwo,
  numThree,
  numFour,
  numFive,
  numSix,
}) {
  return (
    <>
      <div className="row">
        <div
          className="col-12 d-flex justify-content-center p-3 text-light"
          style={{ boxSizing: "border-box" }}
        >
          <div className="mx-3 p-3 " style={recuadros}>
            <i class="fs-2 fa-regular fa-clock pt-0"></i>
          </div>
          <div className="mx-3 p-3 " style={recuadros}>
            <h1>{numOne % 10} </h1>
          </div>
          <div className="mx-3 p-3" style={recuadros}>
            <h1>{numTwo % 10}</h1>
          </div>
          <div className="mx-3 p-3" style={recuadros}>
            <h1>{numThree % 10} </h1>
          </div>
          <div className="mx-3 p-3" style={recuadros}>
            <h1>{numFour % 10}</h1>
          </div>
          <div className="mx-3 p-3" style={recuadros}>
            <h1>{numFive % 10}</h1>
          </div>
          <div className="mx-3 p-3" style={recuadros}>
            <h1>{numSix % 10}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondsCounter;
