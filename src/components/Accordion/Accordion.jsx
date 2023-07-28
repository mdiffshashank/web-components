import React, { useState } from "react";
import "./accordion.css";

export const Accordion = ({title,body}) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion">
      <div className="accordion-title">
        <div>{title}</div>
        <span class={"toggle"} onClick={handleChange}>
          {isActive ? "-" : "+"}
        </span>
      </div>

      {isActive && <div className="accordion-details">{body}</div>}
    </div>
  );
};
