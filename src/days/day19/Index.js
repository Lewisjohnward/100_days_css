import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Icon = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  background: linear-gradient(
    75deg,
    saddlebrown 0%,
    black 100%

  );
  opacity: 1;
  text-shadow: none;
  text-align: left;
  font-weight: 300;
  font-size: 0.9em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const SVG_Container = styled.div`
  background: gold;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.6);
`;

const svgAnimation = keyframes`
  from{transform: scaleY(1);}
  to{transform: scaleY(0.95);}
`;

const roadAnimation = keyframes`
  to{stroke-dashoffset: 0;}
`

const SVG = styled.svg`
  circle {
    stroke: black;
    stroke-width: 3px;
    fill: none;
  }
  path {
    fill: black;
    animation: ${svgAnimation} ease-in 1s alternate infinite;
    transform-origin: bottom;
  }

  g {
    transform: translate(15%, -20%) scale(2);
  }

  line {
    stroke: black;
    stroke-width: 3;
    stroke-dasharray: 20;
    stroke-dashoffset: 200;
    animation: ${roadAnimation} 1s linear infinite;
  }
`;

export const Index = ({ grid }) => {
  if (grid) {
    return (
      <Icon className={`icon`}>
        <SVG_Container>
          <SVG height={100} width={200}>
            <g>
              <path d="M56.48,29.333c-0.429,0-0.853,0.023-1.271,0.064l-3.316-13.81c-0.162-0.674-0.766-1.149-1.459-1.149  h-5.161c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5h3.979l1.122,4.674H28.005l-1.131-4.068h4.166c0.828,0,1.5-0.672,1.5-1.5  s-0.672-1.5-1.5-1.5H24.9c-0.469,0-0.91,0.219-1.194,0.593c-0.283,0.373-0.376,0.857-0.251,1.309l1.81,6.512l-6.067,7.679  c-1.903-1.137-4.118-1.803-6.49-1.803C5.7,29.333,0,35.035,0,42.042s5.7,12.707,12.707,12.707c6.592,0,12.026-5.047,12.646-11.479  h6.558c0.001,0,0.002,0,0.003,0c0.132,0,0.266-0.017,0.399-0.054c0.037-0.01,0.07-0.028,0.105-0.041  c0.026-0.009,0.05-0.019,0.076-0.029c0.154-0.065,0.292-0.152,0.411-0.258c0.008-0.007,0.019-0.01,0.027-0.017l18.341-17.014  l1.01,4.206c-4.947,1.74-8.509,6.446-8.509,11.98c0,7.007,5.7,12.707,12.707,12.707c7.007,0,12.707-5.7,12.707-12.707  S63.487,29.333,56.48,29.333z M26.26,27.037l3.678,13.232h-4.661c-0.4-2.845-1.735-5.391-3.698-7.309L26.26,27.037z M19.706,35.331  c1.284,1.339,2.188,3.041,2.54,4.938h-6.441L19.706,35.331z M12.707,51.749C7.354,51.749,3,47.394,3,42.042s4.354-9.708,9.707-9.708  c1.671,0,3.244,0.425,4.619,1.171l-5.796,7.335c-0.356,0.451-0.424,1.066-0.173,1.584c0.25,0.517,0.774,0.846,1.35,0.846h9.622  C21.722,48.043,17.643,51.749,12.707,51.749z M32.697,38.994l-3.858-13.881h18.823L32.697,38.994z M56.48,51.749  c-5.353,0-9.707-4.354-9.707-9.707c0-4.12,2.584-7.64,6.213-9.047l2.035,8.477c0.166,0.688,0.78,1.149,1.458,1.149  c0.115,0,0.233-0.014,0.352-0.041c0.805-0.193,1.302-1.004,1.108-1.81l-2.019-8.408c0.186-0.011,0.371-0.028,0.56-0.028  c5.353,0,9.707,4.355,9.707,9.708S61.833,51.749,56.48,51.749z" />
            </g>
            <line x1={0} x2={200} y1={95} y2={95} />
          </SVG>
        </SVG_Container>
      </Icon>
    );
  }
};
