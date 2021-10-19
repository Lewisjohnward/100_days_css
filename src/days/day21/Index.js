import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { RiUploadCloudLine } from "react-icons/ri";
const animationLength = 5

const Icon = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  background: ${({color}) => color};
  opacity: 1;
  text-shadow: none;
  text-align: left;
  font-weight: 300;
  font-size: 0.9em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  font-family: "Open Sans", Helvetica, sans-serif;

  
`;

const Frame = styled.div`
  position: relative;
  height: 75%;
  width: 75%;
`;

const shapeContainerAni = keyframes`
  0%{transform: translateY(-200px);}
  5%{transform: translateY(20px);}
  7%{transform: translateY(50px) scaleY(0.5);}
  10%{transform: translateY(-50px);}
  14%, 76%{transform: translateY(0);}
  80%{transform: translateY(51%);}
  81%{transform: translateY(60%) scaleY(0.5);}
  83%{transform: translateY(31%) scaleY(1);}
  86%{transform: translateY(0);}
  100%{transform: scale(50);}
`;

const ShapeContainer = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  animation: ${shapeContainerAni} ${animationLength}s ease-in-out infinite;

  & > *{
    background: ${({color}) => color};
  }
`;

const ani1 = keyframes`
  0%,12%{transform: scale(1);}
  22% , 100%{transform: scale(0.01);}
`;

const ani2 = keyframes`
  0%,22%{transform: scale(0.01);}
  32%{transform: scale(1);}
  42%, 100%{transform: scale(0.01);}
`;
const ani3 = keyframes`
  0%,42%{transform: scale(0.01);}
  52%{transform: scale(1);}
  62%, 100%{transform: scale(0.01);}
`;

const ani4 = keyframes`
  0%,62%{transform: scale(0.01);}
  72%, 100%{transform: scale(1);}
`;

const Circle = styled.div`
  position: absolute;
  top: 33%;
  left: 33%;
  height: 33%;
  width: 33%;
  border-radius: 50px;

  animation: ${ani1} ${animationLength}s ease-in-out infinite;
`;

const Polygon = styled.div`
  position: absolute;
  z-index: 999;
  top: 33%;
  left: 33%;
  height: 33%;
  width: 33%;
  clip-path: polygon(
    50% 0%,
    90% 20%,
    100% 60%,
    75% 100%,
    25% 100%,
    0% 60%,
    10% 20%
  );
    animation: ${ani2} ${animationLength}s ease-in-out infinite;
  
 `;

const Triangle = styled.div`
  position: absolute;
  top: 33%;
  left: 33%;
  height: 33%;
  width: 33%;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

  animation: ${ani3} ${animationLength}s ease-in-out infinite;
`;
const Circle1 = styled.div`
  position: absolute;
  top: 33%;
  left: 33%;
  height: 33%;
  width: 33%;
  border-radius: 50px;
  animation: ${ani4} ${animationLength}s ease-in-out infinite;
`;

export const Index = ({ grid }) => {
  const [done, setDone] = useState(false)

  const elementColor = done ? `linear-gradient(60deg, tomato 0%, salmon 99%);` : `white`
  const backgroundColor = done ? `white` : `linear-gradient(60deg, tomato 0%, salmon 99%);` 

  if (grid) {
    return (
      <Icon className={`icon`} color={backgroundColor}>
        <Frame>
          <ShapeContainer color={elementColor} onAnimationIteration={()=>setDone(prev => !prev)}>
            <Circle />
            <Polygon />
            <Triangle />
            <Circle1 /> 
          </ShapeContainer>
        </Frame>
      </Icon>
    );
  }
};
