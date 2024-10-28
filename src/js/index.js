import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import SecondsCounter from "./components/SecondsCounter.jsx";

let counter = 0;

setInterval(() => {
  const one = Math.floor(counter / 1);
  const two = Math.floor(counter / 10);
  const three = Math.floor(counter / 100);
  const four = Math.floor(counter / 1000);
  const five = Math.floor(counter / 10000);
  const six = Math.floor(counter / 100000);

  // Incremento
  counter++;

  // Render
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <div className="container-fluid" style={{ backgroundColor: "#080807" }}>
        <SecondsCounter
          numOne={six}
          numTwo={five}
          numThree={four}
          numFour={three}
          numFive={two}
          numSix={one}
        />
      </div>
    </React.StrictMode>
  );
}, 1000);
