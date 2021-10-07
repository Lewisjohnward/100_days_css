import { useState } from "react";
import styled, { keyframes } from "styled-components";

const circleAnimation = keyframes`
  from{transform: rotate(0deg); }
  to{transform: rotate(360deg); }

`;

const Icon = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: visible;
  background: purple;
  opacity: 0.8;
  cursor: pointer;

  text-shadow: none;

  svg {
    overflow: visible;
  }

  circle {
    stroke: orchid;
    stroke-width: 10px;
    stroke-dashoffset: 10px;
    stroke-dasharray: 100;
    stroke-linecap: butt;
    fill: none;
    fill-opacity: 0;
  }

  circle:nth-child(odd) {
    animation: ${circleAnimation} linear 20s infinite;
    transform-origin: 50% 50%;
  }
  circle:nth-child(even) {
    animation: ${circleAnimation} linear 20s infinite reverse;
    transform-origin: 50% 50%;
  }

  .pause {
    circle {
      animation-play-state: paused;
    }
  }
`;

const height = 250;
const width = 250;

export const Index12 = ({ grid }) => {
  const [toggle, setToggle] = useState(false);
  const string = ``;

  if (grid) {
    return (
      <Icon className="icon" onClick={() => setToggle((prev) => !prev)}>
        <svg height={height} width={width} className={`${toggle && "pause"}`}>
          <circle cx={width / 2} cy={height / 2} r={100} />
          <circle cx={width / 2} cy={height / 2} r={80} />
          <circle cx={width / 2} cy={height / 2} r={60} />
          <circle cx={width / 2} cy={height / 2} r={40} />
          <circle cx={width / 2} cy={height / 2} r={20} />
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
