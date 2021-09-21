import { useState, useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Div = styled.div`
  position: relative;
  background: rgb(50, 50, 50);
`;

const Sky = styled.div`
  position: absolute;
  background: cyan;
  width: 125px;
  height: 125px;
  border-radius: 100px;
  z-index: 1;
`;
const Ground = styled.div`
  position: absolute;
  background: khaki;
  bottom: 60px;
  width: 125px;
  height: 40px;
  border-radius: 0px 0px 80px 80px;
  z-index: 1;
`;

export const Index3 = ({ grid }) => {
  const string = ``;

  if (grid) {
    return (
      <Div className="icon">
        <Sky />
        <Ground />
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
