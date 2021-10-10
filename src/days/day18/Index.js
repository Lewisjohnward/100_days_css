import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Icon = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  background: white;
  opacity: 1;
  text-shadow: none;
  text-align: left;
  font-weight: 300;
  font-size: 0.9em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const GridContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2px;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: red;
`;

const Circle = styled.div`
  position: absolute;
  z-index: 6;
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

  &:hover {
    cursor: pointer;
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

const overlayAnimation = keyframes`
  from{transform: translateY(-100%);}
  to{transform: translateY(0);}
`
const buttonAnimation = keyframes`
  from{transform: translateY(-200%);}
  to{transform: translateY(0);}
`

const OverlayContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: blue;
  opacity: 1;
  z-index: 5;

  animation: ${overlayAnimation} ease-in 0.2s forwards;

  .button_container {
    position: absolute;
    top: 4%;
    right: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    height: 15%;
    font-size: 2em;
    font-weight: 600;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 100%;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    animation: ${buttonAnimation} ease-in 0.5s forwards;
    
  }
`;

export const Index = ({ grid }) => {
  const [toggle, setToggle] = useState(false);

  if (grid) {
    return (
      <>
        <Icon className={`icon`}>
          {toggle ? (
            <Overlay setToggle={setToggle} toggle={toggle}/>
          ) : (
            <GridContainer>
              <Img user={"a"} setToggle={setToggle} />
              <Img user={"b"} setToggle={setToggle} />
              <Img user={"c"} setToggle={setToggle} />
              <Img user={"d"} setToggle={setToggle} />
            </GridContainer>
          )}
        </Icon>
      </>
    );
  }
};

const Img = ({ user, setToggle }) => {
  const [visible, setVisible] = useState(false);
  return (
    <ImgContainer
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setToggle(true)}
    >
      <Circle className={visible ? "active" : ""}>
        <Cross>+</Cross>
      </Circle>
      <Dark className={visible ? "active" : ""}>
        <p>{user}</p>
      </Dark>
    </ImgContainer>
  );
};

const Overlay = ({setToggle, toggle}) => {
  return (
    <OverlayContainer >
      <div className={`button_container`} onClick={() => setToggle(false)}>
        <p>X</p>
      </div>
    </OverlayContainer>
  );
};
