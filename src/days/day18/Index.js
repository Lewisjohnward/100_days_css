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
  overflow: hidden;
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
  z-index: 6;
  height: 100%;
  width: 100%;
`;
const Cross = styled.div`
  font-size: 2em;
  font-weight: 900;
`;

const topOverlayAnimation = keyframes`
  from{transform: translateY(-100%);}
  to{transform: translateY(0);}
`;

const bottomOverlayAnimation = keyframes`
from{transform: translateY(200%);}
to{transform: translateY(100%);}
`;

const buttonAnimation = keyframes`
  from{transform: translateY(-200%);}
  to{transform: translateY(0);}
`;

const buttonBottomOverlayAnimation = keyframes`
from{transform: translateY(200%);}
to{transform: translateY(0%);}
`;


const OverlayContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 1;
  z-index: 1;

  .image_container {
    position: absolute;
    height: 50%;
    width: 100%;
    z-index: 1;

    .background_image {
      position: absolute;
      height: 100%;
      width: 100%;
      animation: ${topOverlayAnimation} ease-in 0.5s forwards;
      background: url("https://static.toiimg.com/thumb/msid-38487526,width-748,height-499,resizemode=4,imgsize-248462/.jpg")
        no-repeat fixed center;
      filter: grayscale(100%);
    }

    img {
      position: absolute;
      top: 10%;
      left: 30%;
      width: 40%;
      height: 80%;
      border-radius: 50px;
      box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.2);
      animation: ${topOverlayAnimation} ease-in 1s forwards;
    }
  }

  .bottom_container {
    position: absolute;
    
    z-index: 1;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: red;
    animation: ${bottomOverlayAnimation} ease-in 0.5s forwards;

    button{
      border: none;
      background: none;
      box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.4);
      padding: 5%;
      border-radius: 10px;
      animation: ${buttonBottomOverlayAnimation} ease-in 1s forwards;
    }
  }

  .button_container {
    position: absolute;
    top: 4%;
    right: 5%;
    z-index: 2;
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
    animation: ${buttonAnimation} ease-in 1.6s forwards;
  }
`;

const User_Image = styled.div`
  position: absolute;
  top: -22%;
  left: -20%;
  width: 100%;
  height: 100%;
  z-index: 5;
  src: ${({ src }) => src};
  transform: rotate(50deg) scale(0.2);


  &.active {
    transition: filter 0.2s;
    filter: brightness(50%);
  }
`;

const users = [
  {
    user: "a",
    image: "https://100dayscss.com/codepen/13-1.jpg",
  },
  {
    user: "b",
    image: "https://100dayscss.com/codepen/13-2.jpg",
  },
  {
    user: "c",
    image: "https://100dayscss.com/codepen/13-3.jpg",
  },
  {
    user: "d",
    image: "https://100dayscss.com/codepen/13-4.jpg",
  },
];

export const Index = ({ grid }) => {
  const [toggle, setToggle] = useState(false);
  const [current, setCurrent] = useState(null);

  if (grid) {
    return (
      <>
        <Icon className={`icon`}>
          {current ? (
            <Overlay current={current} setCurrent={setCurrent} />
          ) : (
            <GridContainer>
              {users.map((d) => (
                <Img user={d.user} setCurrent={setCurrent} src={d.image} />
              ))}
            </GridContainer>
          )}
        </Icon>
      </>
    );
  }
};

const Img = ({ user, src, setCurrent }) => {
  const [visible, setVisible] = useState(false);
  return (
    <ImgContainer
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setCurrent({ user, src })}
    >
      <Circle className={visible ? "active" : ""}>
        <Cross>+</Cross>
      </Circle>
      <User_Image className={visible ? "active" : ""}>
        <img src={src} />
      </User_Image>
    </ImgContainer>
  );
};

const Overlay = ({ setCurrent, current }) => {
  return (
    <OverlayContainer>
      <div className={`button_container`} onClick={() => setCurrent(null)}>
        <p>X</p>
      </div>
      <div className="image_container">
        <div className="background_image" />
        <img src={current.src} />
      </div>
      <div className="bottom_container">
        <button>X</button>
        <button>Y</button>
        <button>Z</button>
      </div>
    </OverlayContainer>
  );
};
