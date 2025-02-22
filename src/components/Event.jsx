import React from "react";

const Event = (props) => {
  return (
    <td className={"Event " + props.color}>
      <h5>{props.event}</h5>
      {props.location && <h6>{props.location}</h6>}
    </td>
  );
};

export default Event;
