import React, { useState } from "react";
import data from "./data";
import { FcNext, FcPrevious } from "react-icons/fc";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    } else if (number < 0) {
      return data.length - 1;
    } else {
      return number;
    }
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    setIndex((index) => {
      let randomNumber = Math.floor(Math.random() * data.length);

      if (randomNumber === index) {
        randomNumber = randomNumber + 1;
        return checkNumber(randomNumber);
      } else {
        return checkNumber(randomNumber);
      }
    });
  };

  return (
    <div key={id}>
      <div className="img-container">
        <img src={image} alt={name} />
        <span class="quote-icon">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
          </svg>
        </span>
      </div>
      <h1>{name}</h1>
      <h2>{job}</h2>
      <p>{text}</p>
      <div className="arrow">
        <button className="prev-btn">
          <FcPrevious onClick={prevPerson} />
        </button>
        <button className="next-btn">
          <FcNext onClick={nextPerson} />
        </button>
      </div>
      <button className="random" onClick={randomPerson}>
        Suprise Me
      </button>
      <p>{index}</p>
    </div>
  );
}
