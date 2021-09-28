import { useState, useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const sunTransition = keyframes`
  0%{transform: rotate(0deg);}
  25%{transform: rotate(30deg);}
  50%{transform: rotate(40deg);}
  100%{transform: rotate(160deg);}
`;
const leftFaceAnimation = keyframes`
  0%{background: #e6e1e1;}
  25%{background: #f5f2f2;}
45%{background: #fffcfc;}
  100%{background: gray;}
`;

const rightFaceAnimation = keyframes`
  0%{background: gray;}
  25%{background: gray;}
  45%{background:#f5f2f2;}
  100%{background: #e6e1e1;}
`;

const nightAnimation = keyframes`
  0%{opacity: 0;}
  25%{opacity: 1;}
  50%{opacity: 1;}
  75%{opacity: 1;}
  85%{opacity: 0;}
  100%{opacity: 0;}
`;

const piramidShadow = keyframes`
  0%{clip-path: polygon(90% 0%, 30% 0%, 90% 40%); width: 160px; height: 80px;}
  25%{clip-path: polygon(90% 0%, 30% 0%, 90% 80%); width: 160px; height: 50px;}
  50%{clip-path: polygon(90% 0%, 30% 0%, 90% 40%); width: 160px; height: 60px;}
  100%{clip-path: polygon(90% 0%, 30% 0%, 90% 40%); width: 160px; height: 100px;}
`;

const Div = styled.div`
  position: relative;
  background: rgb(50, 50, 50);
`;

const Mask = styled.div`
  clip-path: circle(60px at 75px 75px);
 
`;

const PiramidLeftFace = styled.div`
  position: absolute;
  top: 42%;
  left: 35%;
  height: 40px;
  width: 66px;
  background: #e6e1e1;
  animation: ${leftFaceAnimation} linear 4s infinite;
  clip-path: polygon(0% 100%, 70% 100%, 50% 0%);
  z-index: 4;
`;
const PiramidRightFace = styled.div`
  position: absolute;
  top: 42%;
  left: 48%;
  height: 40px;
  width: 66px;
  background: gray;
  animation: ${rightFaceAnimation} linear 4s infinite;
  clip-path: polygon(0% 0%, 0% 100%, 80% 110%);
  z-index: 4;
`;

const PiramidShadow = styled.div`
  position: absolute;
  top: 58%;
  left: 15%;
  height: 40px;
  width: 120px;
  background: gray;
  clip-path: polygon(90% 0%, 30% 0%, 90% 40%);
  animation: ${piramidShadow} linear 4s infinite;
  z-index: 6;
`;

const TestDiv = styled.div`
  display: absolute;
  width: 150px;
  height: 150px;
`;
const Sun = styled.div`
  position: absolute;
  background: yellow;
  top: 45%;
  left: 20%;
  transform-origin: 400% 300%;
  animation: ${sunTransition} linear 4s infinite;
  transform: translate(-50%, -50%);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  z-index: 2;
`;

const Sky = styled.div`
  position: absolute;
  background: cyan;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 55%;
  width: 60%;
  border-radius: 150px 150px 0 0;
  z-index: 1;
`;
const Ground = styled.div`
  position: absolute;
  background: khaki;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 35%;
  width: 60%;
  border-radius: 0 0 200px 200px;
  z-index: 3;
`;

export const Index3 = ({ grid }) => {
  const string = ``;

  if (grid) {
    return (
      <Div className="icon">
        <Mask>
          <TestDiv>
            <Sun />
            <PiramidShadow />
            <PiramidRightFace />
            <PiramidLeftFace />
            <Sky />
            <Ground />
          </TestDiv>
        </Mask>
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
