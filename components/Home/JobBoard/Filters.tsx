import React from "react";

type Props = {};

function Fitlers({}: Props) {
  return (
    <div className="w-[200px]">
      <div>
        <h2>Filters</h2>
        <div>
          <h3>Job Type</h3>
          <ul>
            <li>Full Time</li>
            <li>Part Time</li>
            <li>Remote</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Fitlers;
