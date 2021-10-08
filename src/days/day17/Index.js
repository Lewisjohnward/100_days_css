import { useState } from "react";
import styled, { keyframes } from "styled-components";

const test = keyframes`
  0% {transform: rotate(0deg);}
  33% {transform: rotate(100deg);}
  66% {transform: rotate(0deg);}
  66, 88% {transform: rotate(50deg);}
  100% {transform: rotate(50deg);}
`;

const Icon = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  background: yellowgreen;
  opacity: 1;
  text-shadow: none;
  text-align: left;
  font-weight: 300;
  font-size: 0.9em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  
  &:hover {
    &::after {
      content: "Do not touch!";
      position: absolute;
      top: 25%;
      left: 22%;
      color: red;
      font-size: 3em;
      font-weight: 700;
      z-index: 99;
    }
  }

  &.animation {

    z-index: 99;
    animation: ${test} linear 2s forwards;
    transform-origin: top left;
  }
`;

const Strip = styled.div`
  position: absolute;
  width: 200%;
  height: 15%;
  background: yellow;
  z-index: 98;

  transform: rotate(
    ${() => {
      const randomDegree = Math.floor(Math.random() * (360 + 1));
      return randomDegree;
    }}deg
  );

  top: ${() => {
    const randomNum = Math.floor(Math.random() * (60 + 1));
    return randomNum;
  }}%;

  left: ${() => {
    const randomNum = Math.floor(Math.random() * (1 + 10 + 1) - 45);
    return randomNum;
  }}%;

  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;

  &::before {
    content: "out of order out of order";
    color: black;
    font-size: 1.5em;
    font-weight: 600;
    position: absolute;
    top: 15%;
    left: 20%;
  }
`;

const Iconcontainer = styled.div`
  &.on {
    transition: transform 2s;
    transition-delay: 2s;
    transition-timing-function: linear;
    transform: translateY(600px);
  }
`;

const Iconcontainer1 = styled.div`
  position: relative;

  .recovericon {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: none;
    box-shadow: none;
    
    .divcontainer {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 10px;
      border: 2px solid black;
    }
  }
`;

const SpeechMarks = styled.p``;

const height = 50;
const width = 50;

const numberOfTape = 5;
const array = new Array(numberOfTape).fill(0);

export const Index17 = ({ grid }) => {
  const [toggle, setToggle] = useState(false);

  if (grid) {
    return (
      <>
        <Iconcontainer1 onClick={() => setToggle((prev) => !prev)}>
          <Iconcontainer className={`${toggle ? "on" : ""}`}>
            <Icon className={`icon ${toggle ? "animation" : ""}`}>
              {array.map((d, i) => (
                <Strip className="strip" num={i} />
              ))}
            </Icon>
          </Iconcontainer>
          {toggle ? (
            <Icon className="icon recovericon">
              <div className="divcontainer">
              <svg height={50} width={50}>
                <path
                  d="M 43.90625 1.96875 A 1.0001 1.0001 0 0 0 43.8125 2 L 43.78125 2 L 40 2 C 39.732 2 39.46925 2.1215 39.28125 2.3125 L 25.21875 16.59375 L 26.4375 18.15625 L 30.21875 14.34375 L 30.90625 20.875 L 29.8125 22.5 L 30.9375 23.96875 C 30.9885 24.03375 31.04675 24.08825 31.09375 24.15625 L 43 6.3125 L 43 28.28125 C 42.403104 28.627293 42 29.260396 42 30 C 42 30.739604 42.403104 31.372707 43 31.71875 L 43 32.96875 C 43 33.907231 43.611019 34.7901 44.5625 35.0625 C 45.505289 35.33073 46.16316 36.267345 45.96875 37.375 C 45.833253 38.149451 45.151316 38.832396 44.375 38.96875 C 43.061981 39.199238 42 38.236635 42 37 A 1.0001 1.0001 0 1 0 40 37 C 40 39.433365 42.237769 41.373012 44.71875 40.9375 C 46.356434 40.649854 47.650997 39.356299 47.9375 37.71875 C 48.30509 35.624405 46.990961 33.69602 45.09375 33.15625 C 45.053231 33.14465 45 33.062269 45 32.96875 L 45 31.71875 C 45.596896 31.372707 46 30.739604 46 30 C 46 29.260396 45.596896 28.627293 45 28.28125 L 45 3.0625 C 45.002401 3.0137957 45.00474 2.9549279 45 2.90625 A 1.0001 1.0001 0 0 0 44.71875 2.3125 A 1.0001 1.0001 0 0 0 43.90625 1.96875 z M 40.40625 4 L 42.125 4 L 38.71875 9.125 L 38.4375 5.96875 L 40.40625 4 z M 36.59375 7.875 L 36.84375 10.9375 L 33.34375 11.15625 L 36.59375 7.875 z M 36.15625 12.96875 L 32.625 18.25 L 32.09375 13.25 L 36.15625 12.96875 z M 8 16 C 6.3550302 16 5 17.35503 5 19 L 5 31 C 5 32.64497 6.3550302 34 8 34 L 11 34 L 11 36 L 8 36 C 4.6983746 36 2 38.698375 2 42 C 2 45.301625 4.6983746 48 8 48 L 30 48 C 33.301625 48 36 45.301625 36 42 C 36 38.698375 33.301625 36 30 36 L 27 36 L 27 34 L 28 34 C 29.64497 34 31 32.64497 31 31 L 31 28 L 31 27.03125 C 31 26.142361 30.701222 25.264702 30.15625 24.5625 L 24.375 17.15625 C 23.806868 16.426222 22.956192 16 22.03125 16 L 17.75 16 L 17 16 L 8 16 z M 8 18 L 16.25 18 L 19.03125 28.25 L 19.25 29 L 20 29 L 29 29 L 29 31 C 29 31.56503 28.56503 32 28 32 L 8 32 C 7.4349698 32 7 31.56503 7 31 L 7 19 C 7 18.43497 7.4349698 18 8 18 z M 18.3125 18 L 22.03125 18 C 22.340308 18 22.622632 18.131028 22.8125 18.375 L 28.59375 25.8125 C 28.860624 26.156368 28.994126 26.565971 29 27 L 20.75 27 L 18.3125 18 z M 13 34 L 25 34 L 25 36 L 13 36 L 13 34 z M 8 38 L 30 38 C 32.220375 38 34 39.779625 34 42 C 34 44.220375 32.220375 46 30 46 L 8 46 C 5.7796254 46 4 44.220375 4 42 C 4 39.779625 5.7796254 38 8 38 z M 8 40 C 6.8954305 40 6 40.895431 6 42 C 6 43.104569 6.8954305 44 8 44 C 9.1045695 44 10 43.104569 10 42 C 10 40.895431 9.1045695 40 8 40 z M 14 40 C 12.895431 40 12 40.895431 12 42 C 12 43.104569 12.895431 44 14 44 C 15.104569 44 16 43.104569 16 42 C 16 40.895431 15.104569 40 14 40 z M 24 40 C 22.895431 40 22 40.895431 22 42 C 22 43.104569 22.895431 44 24 44 C 25.104569 44 26 43.104569 26 42 C 26 40.895431 25.104569 40 24 40 z M 30 40 C 28.895431 40 28 40.895431 28 42 C 28 43.104569 28.895431 44 30 44 C 31.104569 44 32 43.104569 32 42 C 32 40.895431 31.104569 40 30 40 z"
                />
              </svg>
              </div>
            </Icon>
          ) : null}
        </Iconcontainer1>
      </>
    );
  }

  return (
    <div className="day-container">
      <p className="day-text">2</p>
      <div className="container">
        <Icon className="icon"></Icon>
        <pre></pre>
      </div>
    </div>
  );
};
