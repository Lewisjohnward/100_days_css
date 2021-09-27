import { useState, useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const circle1Animation = keyframes`
  0%, 5% {height: 0%; width: 0%; box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);}
  100%{height: 30%; width: 30%; box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.4);}
`;

const circle2Animation = keyframes`
  0%, 30% {height: 0%; width: 0%; box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);}
  100%{height: 20%; width: 20%; box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.4);}
`;
const circle3Animation = keyframes`
  0%, 55% {height: 0%; width: 0%; box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);}
  100%{height: 10%; width: 10%; box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.4);}
`;

const Div = styled.div`
  position: relative;
  background: coral;
`;

const CircleDiv1 = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: ${circle1Animation} cubic-bezier(.21,.98,.6,.99) 2s infinite alternate;
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const CircleDiv2 = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: ${circle2Animation} cubic-bezier(.21,.98,.6,.99) 2s infinite alternate;
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const CircleDiv3 = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: ${circle3Animation} cubic-bezier(.21,.98,.6,.99) 2s infinite alternate;
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 3;
`;

export const Index5 = ({ grid }) => {
  const string = ``;

  if (grid) {
    return (
      <Div className="icon">
        <CircleDiv3 />
        <CircleDiv2 />
        <CircleDiv1 />
      </Div>
    );
  }

  return (
    <div className="day-container">
      <p className="day-text">2</p>
      <div className="container">
        <Div className="icon"></Div>
        <pre>
          <code>{string}</code>
        </pre>
      </div>
    </div>
  );
};
