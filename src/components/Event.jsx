import React from "react";

import React from "react";
import Event from "./Event";   // <-- import

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          {/* 8 am row */}
          <tr>
            <td className="time">8 am</td>
            {/* Use <Event /> in place of one <td> */}
            <Event />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          {/* ... more rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;

