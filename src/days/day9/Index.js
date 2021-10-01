import { useState } from "react";
import styled, { keyframes } from "styled-components";

const circle1Animation = keyframes`
  from {transform: rotate(0deg); translate3d(0, 0, 0);}
  to {transform: rotate(360deg); translate3d(0, 0, 0);}
`;

const circle2Animation = keyframes`
from {transform: rotate(0deg); transform-origin: 30px 50px;}
to {transform: rotate(360deg); transform-origin: 10px 60px;}
`;

const Icon = styled.div`
  background: black;

  .card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .centralcircle {
    position: absolute;
    height: 75%;
    width: 75%;
    border-radius: 50%;
    background: white;
  }

  .blur {
    filter: blur(10px);
  }

  .circle1 {
    position: absolute;
    top: 0;
    height: 35%;
    width: 35%;
    border-radius: 50%;
    background: white;

    animation: ${circle1Animation} linear 3s infinite;
    transform-origin: 30px 60px;
  }
  .circle2 {
    position: absolute;
    top: 0;
    height: 25%;
    width: 25%;
    border-radius: 50%;
    background: white;

    animation: ${circle1Animation} linear 3s infinite;
    transform-origin: 30px 90px;
  }
  .circle3 {
    position: absolute;
    top: 0;
    height: 25%;
    width: 25%;
    border-radius: 50%;
    background: white;

    animation: ${circle1Animation} linear 4s infinite;
    transform-origin: 30px 50px;
  }
  .circle4 {
    position: absolute;
    top: 0;
    height: 25%;
    width: 25%;
    border-radius: 50%;
    background: white;

    animation:${circle2Animation} linear 4s infinite;
  }
`;
export const Index9 = ({ grid }) => {
  const string = ``;

  if (grid) {
    return (
      <Icon className="icon">
        <div className="card">
          <div className="centralcircle" />
          <div className="centralcircle blur" />
          <div className="circle1" />
          <div className="circle2" />
          <div className="circle3" />
          <div className="circle4" />
        </div>
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
