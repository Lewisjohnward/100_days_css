import styled, { keyframes } from "styled-components";

const moonRiseAnimation = keyframes`
  from{transform: translateY(300%);}
  to {transform: translateY(0%);]
`;

const moonBrightnessAnimation = keyframes`
  from{background: black;}
  to {background: lemonchiffon;]
`;

const moonSpotAnimation = keyframes`
  from{background: black;}
  to {background: rgb(153, 141, 51);]
`;

const moonSpeedCurve = "linear";
const moonAnimationTime = "10s";

const Icon = styled.div`
  position: relative;
  display: block;
  background: black;
  justify-content: start;
  align-items: start;
  padding: 0;
  overflow: hidden;
`;

const Moon = styled.div`
    position: relative;
    z-index: 1;
    margin: 5% 0 0 5%;
    width: 70px;
    height: 70px;

    animation: ${moonRiseAnimation} ${moonSpeedCurve} ${moonAnimationTime}
      forwards;

    .moon {
      position: relative;
      z-index: 2;
      height: 100%;
      border-radius: 50px;
      background: lemonchiffon;
      opacity: 0.8;
      filter: blur(0px);

      animation: ${moonBrightnessAnimation} ${moonSpeedCurve}
        ${moonAnimationTime} forwards;
    }
    .moonglow {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      border-radius: 50px;
      background: lemonchiffon;
      opacity: 1;
      filter: blur(10px);

      animation: ${moonBrightnessAnimation} ${moonSpeedCurve}
        ${moonAnimationTime} forwards;
    }
    .spotcontainer {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      height: 100%;
      width: 100%;

      > * {
        position: absolute;
        animation: ${moonSpotAnimation} ${moonSpeedCurve} ${moonAnimationTime}
          forwards;
        opacity: 0.2;
      }

      .spot1 {
        top: 20%;
        left: 20%;
        width: 8%;
        height: 8%;
        border-radius: 5px;
      }
      .spot2 {
        top: 60%;
        left: 60%;
        width: 9%;
        height: 9%;
        border-radius: 25px;
      }
      .spot3 {
        top: 30%;
        right: 20%;
        width: 9%;
        height: 9%;
        border-radius: 5px;
      }
      .spot4 {
        bottom: 30%;
        left: 20%;
        width: 13%;
        height: 13%;
        border-radius: 5px;
      }
      .spot5 {
        bottom: 15%;
        left: 40%;
        width: 15%;
        height: 15%;
        border-radius: 5px;
      }
      .spot6 {
        top: 20%;
        left: 45%;
        width: 15%;
        height: 15%;
        border-radius: 5px;
      }
    }
  }
`;

const Landscape = styled.div`
  position: relative;
  z-index: 1;
  height: 25%;
  border: 1px solid red;
  border: 1px solid red;


  .foreground {
    position: relative;
    height: 100%;
    overflow: hidden;
    opacity: 0.6;
    > * {
      
      background: rgb(106, 108, 194);
    }

    .mountain1{
      position: absolute;
      top: 30px;
      left: -60px;
      height: 140%;
      width: 70%;
      border-radius: 100px 100px 0px 0px;
    }
    .mountain2{
      position: absolute;
      top: 30px;
      left: 50px;
      height: 140%;
      width: 60%;
      border-radius: 100px 100px 0px 0px;
      
    }
    .mountain3{
      position: absolute;
      top: 10px;
      right: -40px;
      height: 140%;
      width: 60%;
      border-radius: 100px 100px 0px 0px;
    }
  }


`;

export const Index10 = ({ grid }) => {
  const string = ``;

  if (grid) {
    return (
      <Icon className="icon">
        <Moon>
          <div className="moon" />
          <div className="moonglow" />
          <div className="spotcontainer">
            <div className="spot1" />
            <div className="spot2" />
            <div className="spot3" />
            <div className="spot4" />
            <div className="spot5" />
            <div className="spot6" />
          </div>
        </Moon>
        <Landscape>
          <div className="foreground">
            <div className="mountain1" />
            <div className="mountain2" />
            <div className="mountain3" />
          </div>
        </Landscape>
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
