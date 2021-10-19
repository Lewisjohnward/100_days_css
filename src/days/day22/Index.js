import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Icon = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: visible;
  background: lightcoral;
  opacity: 1;
  text-shadow: none;
  text-align: left;
  font-weight: 300;
  font-size: 0.9em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  font-family: "Open Sans", Helvetica, sans-serif;
`;

const Frame = styled.div`
  position: absolute;
  height: 65%;
  width: 65%;
  background: gray;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const SVG = styled.svg`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const TriangleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Triangle_Bottom = styled.div`
  position: absolute;
  bottom: 20%;
  left: 25%;
  width: 50%;
  height: 15%;
  background: white;
`;
const Triangle_Side = styled.div`
  position: absolute;
  bottom: 40%;
  left: 25%;
  width: 50%;
  height: 15%;
  background: lightgray;
  transform: skew(-50deg, -50deg);
`;

const numOfLines = 30;

const arrayOfLines = new Array(numOfLines).fill(0);
console.log("%cIndex.js line:35 arrayOfLines", "color: #007acc;", arrayOfLines);
export const Index = ({ grid }) => {
  if (grid) {
    return (
      <Icon className="icon">
        <SVG>
          {arrayOfLines.map((d, i) => (
            <>
              <g transform={`translate(${0}, ${i * -10})`}>
                <line stroke="gray" strokeWidth={2} y2={300} x2={300} />
              </g>
              <g transform={`translate(${0}, ${i * 10})`}>
                <line stroke="gray" strokeWidth={2} y2={300} x2={300} />
              </g>
            </>
          ))}
        </SVG>
        <Frame>
          <TriangleContainer>
            <Triangle_Side />
            <Triangle_Bottom />
          </TriangleContainer>
        </Frame>
      </Icon>
    );
  }
};
