import React, { useState } from "react";
import "./starrating.css";

const stars = Array.from({ length: 5 });

export const StarRating = () => {
  const [rating, setRating] = useState(0);

  const hadnleRating = (index) => {
    setRating(index);
  };

  return (
    <div className="container">
      {stars.map((star, index) => {
        index += 1;

        return (
          <button
            key={index}
            onClick={() => hadnleRating(index)}
            className={`star ${rating >= index ? "highlight" : ""}`}
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
};

/**
 * HTML entity code for star is &#9733;
 */
/**
 * https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6
 */
