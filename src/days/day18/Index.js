import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Icon = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  background: white;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2px;
  opacity: 1;
  text-shadow: none;
  text-align: left;
  font-weight: 300;
  font-size: 0.9em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: red;
`;

const Circle = styled.div`
  position: absolute;
  z-index: 2;
  top: 30%;
  left: 30%;
  width: 40%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
  border-radius: 999px;
  transform: scale(1.4);
  opacity: 0;

  &.active {
    transition: transform 0.2s, opacity 0.2s;
    transform: scale(0.8);
    opacity: 1;
  }
`;

const Dark = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  background: red;
  &.active {
    transition: filter 0.2s;
    filter: brightness(50%);
  }
`;
const Cross = styled.div`
  font-size: 2em;
  font-weight: 900;
`;

export const Index = ({ grid }) => {
  const [toggle, setToggle] = useState(false);

  if (grid) {
    return (
      <>
        <Icon className={`icon`}>
          <Img />
          <Img />
          <Img />
          <Img />
        </Icon>
      </>
    );
  }
};

const Img = () => {
  const [visible, setVisible] = useState(false);
  return (
    <ImgContainer
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      
    >
      <Circle className={visible ? "active" : ""}>
        <Cross>+</Cross>
      </Circle>
      <Dark className={visible ? "active" : ""}/>
      
    </ImgContainer>
  );
};
