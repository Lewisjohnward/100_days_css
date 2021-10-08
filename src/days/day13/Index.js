import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Icon = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: visible;
  background: mediumslateblue;
  opacity: 0.8;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  text-shadow: none;

 
`;

const r = 52
const circumference = r * 2 * Math.PI;
const height = 100;
const width = 100;

export const Index13 = ({ grid }) => {
  const [toggle, setToggle] = useState(false);
  const string = ``;


  if (grid) {
    return (
      <Icon className="icon" onClick={() => setToggle((prev) => !prev)}>
        <svg class="progress-ring" height="120" width="120">
          <circle
            class="progress-ring__circle"
            stroke="white"
            stroke-width="4"
            fill="transparent"
            strokeDasharray= {`${circumference} ${circumference}`}
            strokeDashoffset = {circumference}
            r={r}
            cx="60"
            cy="60"
          />
        </svg>
      </Icon>
    );
  }

  return (
    <div className="day-container">
      <p className="day-text">2</p>
      <div className="container">
        <Icon className="icon"></Icon>
        <pre>
          <code>{string}</code>
        </pre>
      </div>
    </div>
  );
};
