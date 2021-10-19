import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { RiUploadCloudLine } from "react-icons/ri";

const height = 200;
const width = 200;

const Icon = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: visible;
  background: linear-gradient(
    180deg,
    rgb(211, 79, 79) 0%,
    rgb(84, 84, 231) 100%
  );
  opacity: 1;
  text-shadow: none;
  text-align: left;
  font-weight: 300;
  font-size: 0.9em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  font-family: "Open Sans", Helvetica, sans-serif;
`;

const Frame = styled.div`
  height: 82%;
  width: 85%;
  padding: 5px;
  background: white;
  border-radius: 7px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
`;

const strokeDashOffsetAnimation = keyframes`
  to{stroke-dashoffset: 0;}
`

const penAnimation = keyframes`
  0%{transform: translate(40px,56px) scale(2,-2) scale(-1,-1) scale(0.1) scale(0.5);}
  100%{transform: translate(240px,56px) scale(2,-2) scale(-1,-1) scale(0.1) scale(0.5);}}
`

const SVG = styled.svg`
  height: ${height}px;
  width: ${width}px;
  overflow: visible;

  g{
    transform:scale(2,-2) scale(-1,-1) scale(0.1) scale(0.5);
    animation: ${penAnimation} linear 5s infinite;
  }

  path{
    filter: drop-shadow( 0px 0px 20px rgba(0, 0, 0, 0.7));
  }

  line {
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    
    animation: ${strokeDashOffsetAnimation} linear 5s infinite;
  }
`;

export const Index = ({ grid }) => {
  if (grid) {
    return (
      <Icon className={`icon`}>
        <Frame>
          <SVG>
            <g>
              <path
                style={{fill:"#FFFFFF"}}
                d="M437.029,439.43c0,0.79-0.31,1.54-0.87,2.1c-1.12,1.11-3.08,1.12-4.2,0l-11.91-11.92l4.2-4.19     l11.91,11.91C436.719,437.89,437.029,438.64,437.029,439.43z"
              />
              <path d="M18.269,68.58l9.13,9.13l44.94-44.94l-9.13-9.13c-2.51-2.51-5.86-3.9-9.41-3.9c-3.56,0-6.9,1.39-9.41,3.9l-26.12,26.12     c-2.51,2.51-3.9,5.85-3.9,9.41C14.369,62.72,15.759,66.06,18.269,68.58z M280.849,353.05c11.07,11.07,23.02,21.04,35.74,29.88     l60.97-60.97c-8.85-12.72-18.82-24.66-29.89-35.73L105.479,44.04l-66.82,66.82L280.849,353.05z M324.209,388.04     c11.5,7.4,23.59,13.92,36.23,19.49l47.86,21.11l14.96-14.97l-21.1-47.85c-5.57-12.64-12.09-24.74-19.5-36.23L324.209,388.04z      M431.959,441.53c1.12,1.12,3.08,1.11,4.2,0c0.56-0.56,0.87-1.31,0.87-2.1c0-0.79-0.31-1.54-0.87-2.1l-11.91-11.91l-4.2,4.19     L431.959,441.53z M442.519,430.97c4.67,4.66,4.67,12.25,0,16.92c-2.33,2.33-5.4,3.5-8.46,3.5s-6.13-1.17-8.46-3.5l-11.91-11.91     l-3.38,3.38l-53.5-23.59c-30.81-13.59-58.51-32.55-82.32-56.36l-255.81-255.8c-2.29-2.3-3.55-5.35-3.55-8.6     c0-3.24,1.26-6.29,3.55-8.59l2.36-2.35l-9.13-9.13c-4.22-4.21-6.54-9.81-6.54-15.77s2.32-11.56,6.54-15.78l26.12-26.11     c4.21-4.22,9.81-6.54,15.77-6.54s11.56,2.32,15.77,6.54l9.13,9.12l2.35-2.34c4.73-4.74,12.44-4.74,17.18,0l26.87,26.87     l10.78-10.78l-33.79-33.79l6.37-6.36l173.59,173.6c10.05,10.04,24.41,14.56,38.4,12.07l1.57,8.86c-3.05,0.54-6.13,0.81-9.18,0.81     c-13.81,0-27.22-5.45-37.15-15.38L142.239,46.51l-10.78,10.78l222.58,222.57c23.81,23.82,42.77,51.51,56.36,82.32l23.58,53.5     l-3.37,3.37L442.519,430.97z M32.299,104.49l66.82-66.82l-7.25-7.25c-0.62-0.61-1.42-0.92-2.23-0.92c-0.81,0-1.61,0.31-2.23,0.92     l-62.36,62.37c-0.6,0.59-0.92,1.38-0.92,2.22c0,0.85,0.32,1.64,0.92,2.23L32.299,104.49z" />
              <path
                style={{fill:"#A7B6C4"}}
                d="M382.659,329.59c7.41,11.49,13.93,23.59,19.5,36.23l21.1,47.85l-14.96,14.97l-47.86-21.11     c-12.64-5.57-24.73-12.09-36.23-19.49L382.659,329.59z"
              />
              <path
                style={{fill:"#4489D3"}}
                d="M347.669,286.23c11.07,11.07,21.04,23.01,29.89,35.73l-60.97,60.97     c-12.72-8.84-24.67-18.81-35.74-29.88L38.659,110.86l66.82-66.82L347.669,286.23z"
              />
              <path
                style={{fill:"#A7B6C4"}}
                d="M89.639,29.5c0.81,0,1.61,0.31,2.23,0.92l7.25,7.25l-66.82,66.82l-7.25-7.25     c-0.6-0.59-0.92-1.38-0.92-2.23c0-0.84,0.32-1.63,0.92-2.22l62.36-62.37C88.029,29.81,88.829,29.5,89.639,29.5z"
              />
              <path
                style={{fill:"#4489D3"}}
                d="M44.389,23.64c2.51-2.51,5.85-3.9,9.41-3.9c3.55,0,6.9,1.39,9.41,3.9l9.13,9.13l-44.94,44.94     l-9.13-9.13c-2.51-2.52-3.9-5.86-3.9-9.41c0-3.56,1.39-6.9,3.9-9.41L44.389,23.64z"
              />
            </g>
            <line stroke="black"  x2={width} y1={height / 2} y2={height / 2 }/>
          </SVG>
        </Frame>
      </Icon>
    );
  }
};
