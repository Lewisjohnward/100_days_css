import { useState, useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Div = styled.div`
  position: relative;
  background: rgb(50, 50, 50);
`;

const Mask = styled.div`
  clip-path: circle(60px at 50% 50%);
`;

const TestDiv = styled.div`
  background: red;
  height: 250px;
  width: 250px;
`;
const TestDiv2 = styled.div`
  background: yellow;
  height: 250px;
  width: 250px;
`;

const TextContainer = styled.p`
  display: block;
  position: absolute;
  top: 10%;
  z-index: 5;
`

export const Index4 = ({ grid }) => {
  const string = ``;

  if (grid) {
    return (
      <Div className="icon">
        <TextContainer>clip-path</TextContainer>
        <Mask>
          <TestDiv />
          <TestDiv2 />
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
