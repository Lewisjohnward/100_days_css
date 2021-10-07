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
`;

const ShoeContainer = styled.div`
  position: absolute;
  left: 500px;
  top: -400px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background: white;
`;

const Shoe = styled.div`
  width: 75%;
  height: 75%;

  .red {
    height: 50%;
    width: 45%;
    background: crimson;
  }

  .sole {
    position: relative;
    height: 20%;
    width: 95%;
    background: black;

    .gap1{
      position: absolute;
      bottom: -20%;
      left: 30%;
      height: 40%;
      width: 20%;
      background: white;
      border-radius: 50%;
    }
  }
`;

const height = 50;
const width = 50;

export const Index15 = ({ grid }) => {
  const [toggle, setToggle] = useState(false);
  const string = ``;

  if (grid) {
    return (
      <Icon className="icon" onClick={() => setToggle((prev) => !prev)}>
        <ShoeContainer>
          <Shoe>
            <div className="red" />
            <div className="sole">
              <div className="gap1" />
            </div>
          </Shoe>
        </ShoeContainer>
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
