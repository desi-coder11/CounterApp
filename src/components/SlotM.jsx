import React from "react";

const SlotM = (props) => {
  // let x = props.x;
  // let y = props.y;
  // let z = props.z;

  //object destructure
  let { x, y, z } = props;

  if (x === y && y === z) {
    return (
      <>
        <h3>
          {x} {y} {z}{" "}
        </h3>
        <h4>This is Matching</h4>
      </>
    );
  } else {
    return (
      <>
        <h3>
          {x} {y} {z}{" "}
        </h3>
        <h4>This is Not Matching</h4>
      </>
    );
  }
};
export default SlotM;
