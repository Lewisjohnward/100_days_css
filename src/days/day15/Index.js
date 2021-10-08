import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Icon = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: visible;
  background: darkorange;
  opacity: 1;
  text-shadow: none;
  color: black;
  text-align: left;
  font-weight: 300;
  font-size: 0.9em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const ShoeContainer = styled.div`
  position: absolute;
  z-index: 99;
  width: 200px;
  height: 200px;
  background: white;

  svg{
    fill: none;
    stroke: black;
  }
`;

const Shoe = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  height: 40%;
  width: 50%;
  background: crimson;
  transform: rotate(80deg);
`;

const Background = styled.div`
  position: relative;
  background: moccasin;
  height: 70%;
  width: 100%;
`;

const Floor = styled.div`
  height: 30%;
  width: 100%;
  background: black;
`;

const height = 50;
const width = 50;

export const Index15 = ({ grid }) => {
  const [toggle, setToggle] = useState(false);
  const string = ``;

  if (grid) {
    return (
      <Icon className="icon" onClick={() => setToggle((prev) => !prev)}>
        <Background>
          <ShoeContainer>
            <svg height="210" width="400">
              <path d="M150 0 L75 200 L225 200 Z" />
            </svg>
          </ShoeContainer>
        </Background>
        <Floor />
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
