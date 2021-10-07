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
const circle3Animation = keyframes`
from {transform: rotate(0deg);}
to {transform: rotate(360deg); }
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
    filter: blur(5px);
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
    background: whiredte;

    animation: ${circle1Animation} linear 3s infinite;
    transform-origin: 30px 90px;

    .blur {
      filter: blur(25px);
    }
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
  .circle4 {
    position: absolute;
    top: 10px;
    left: 25px;
    height: 25%;
    width: 25%;
    border-radius: 50%;
    background: white;
    transform-origin: 50px 55px;
    animation:${circle3Animation} linear 4s infinite;
  }
  .circle5 {
    position: absolute;
    top: 10px;
    left: 25px;
    height: 25%;
    width: 25%;
    border-radius: 50%;
    background: white;
    transform-origin: 50px 55px;
    animation:${circle3Animation} linear 3s infinite;

    .blur {
      filter: blur(25px);
    }
  }
  .circle6 {
    position: absolute;
    top: 10px;
    left: 25px;
    height: 65%;
    width: 65%;
    border-radius: 50%;
    background: white;
    transform-origin: 50px 55px;
    animation:${circle3Animation} linear 2.5s infinite;

    .blur {
      filter: blur(50px);
    }
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
          <div className="circle1 blur" />
          <div className="circle2" />
          <div className="circle2 blur" />
          <div className="circle3" />
          <div className="circle3 blur" />
          <div className="circle4" />
          <div className="circle4 blur" />
          <div className="circle5" />
          <div className="circle5 blur" />
          <div className="circle6" />
          <div className="circle6 blur" />
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
