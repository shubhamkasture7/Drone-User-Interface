import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Specication </p>
          <h3>तपशील</h3>
          <p>
          Payload: 3 kg <br/>
Range: 5 km <br/>
Flight time: 45 minutes <br/>
Coverage: 10 acres <br/>
Accuracy: 30 cm location <br/>
Spray reach: Best in class <br/>
Battery cycles: 500+ <br/>
Turnaround time: 1 minute 

          </p>
          
          <h3>Information</h3>
          <p>
          Tether cable weight: The weight of the tether cable can range from 26 g/m*. <br/>
Tether length: Tether length can range from 30–250 m. <br/>
Output voltage: Output voltage can be 24 V or 48 V. <br/>
Output power: Output power can be up to 6 kW. 
Input power: Input power can be single phase 240 V AC 6 kW. <br/>
Winching mechanism: Tethered drones can have tension-based auto winching, manual winching, and emergency reset. <br/>

          </p>
          
          <p>Thank You!!!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
