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
const blurAnimation = keyframes`
    0%, 25% {filter: blur(0);}
    100% {filter: blur(15px);}
`
const moonSpeedCurve = "linear";
const moonAnimationTime = "5s";

const Icon = styled.div`
  position: relative;
  display: block;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  background: rgb(36, 36, 55);
  box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.3);
  text-shadow: none;
`;

const Scene = styled.div`
  position: relative;
  z-index: 0;
  height: 80%;
`;

const Moon = styled.div`
    position: absolute;
    top: 10px;
    left 10px;
    z-index: 1;
    width: 70px;
    height: 70px;
    margin: 5% 0 0 0;
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

      animation: ${blurAnimation} ${moonSpeedCurve} ${moonAnimationTime} forwards;
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
  position: absolute;
  bottom: 0;
  z-index: 1;
  height: 25%;
  width: 100%;

  .background {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    overflow: hidden;

    > * {
      background: rgb(125, 126, 170);
    }

    .mountain1 {
      position: absolute;
      top: 0;
      left: -70px;
      height: 300px;
      width: 100%;
      border-radius: 999px 999px 0px 0px;
    }
    .mountain2 {
      position: absolute;
      top: 0;
      left: 100px;
      height: 300%;
      width: 80%;
      border-radius: 999px 999px 0px 0px;
    }
  }

  .foreground {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    overflow: hidden;

    > * {
      background: rgb(106, 108, 194);
    }

    .mountain1 {
      position: absolute;
      top: 20px;
      left: -60px;
      height: 240%;
      width: 70%;
      border-radius: 100px 100px 0px 0px;
    }
    .mountain2 {
      position: absolute;
      top: 10px;
      left: 60px;
      height: 160%;
      width: 60%;
      border-radius: 100px 100px 0px 0px;
    }
    .mountain3 {
      position: absolute;
      top: 20px;
      right: -70px;
      height: 200%;
      width: 60%;
      border-radius: 100px 100px 0px 0px;
    }
  }
`;

const rainDropAnimation = (number) =>{
  const right = randomRain()
  return (
  keyframes`
  0%{top: -10%; height: 20px;}
  90% {top: 95%;  height: 20px;}
  100% {top: 95%;  height: 5px;}
`)};

const randomRain = ()=> {
  const random = Math.floor(Math.random() * (100 - 0 + 1) + 0)
  return random
}
const Rain = styled.div`
  position: absolute;
  top: -10%;
  right: ${({ number }) => number * 15 }%;
  z-index: 5;
  height: 20px;
  width: 10px;
  transform: rotate(32deg);
  animation: ${({ number }) => rainDropAnimation(number)} linear 0.9s infinite;
  animation-delay: ${({ number }) => number / 2}s;

  > * {
    background: rgb(97, 164, 172);
  }

  .head {
    position: absolute;
    top: 50%;
    height: 25%;
    width: 100%;

    border-radius: 0 0 100px 100px;
  }
  .tail {
    position: absolute;
    left: 12%;
    top: 32%;
    height: 35%;
    width: 75%;

    transform: rotate(42deg);
  }
`;

const WeatherData = styled.div`
  position: relative;
  z-index: 1;
  height: 20%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10% 5%;
  background: white;
  color: black;
  font-weight: 200;
  font-size: 0.7em;
  text-align: left;

  .temperature {
    font-weight: 600;
    font-size: 1.9em;
  }

  .weekcontainer {
    display: flex;

    > * {
      padding: 0px 3px;
    }
    .days1 {
    }
  }
`;

export const Index10 = ({ grid }) => {
  const string = ``;

  if (grid) {
    return (
      <Icon className="icon">
        <Scene>
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
            <div className="background">
              <div className="mountain1" />
              <div className="mountain2" />
            </div>
            <div className="foreground">
              <div className="mountain1" />
              <div className="mountain2" />
              <div className="mountain3" />
            </div>
          </Landscape>
          <Rain number={1}>
            <div className="tail" />
            <div className="head" />
          </Rain>
          <Rain number={2}>
            <div className="tail" />
            <div className="head" />
          </Rain>
          <Rain number={3}>
            <div className="tail" />
            <div className="head" />
          </Rain>
          <Rain number={4}>
            <div className="tail" />
            <div className="head" />
          </Rain>
          <Rain number={5}>
            <div className="tail" />
            <div className="head" />
          </Rain>
          <Rain number={6}>
            <div className="tail" />
            <div className="head" />
          </Rain>
        </Scene>
        <WeatherData>
          <div className="temperature">12°</div>
          <div className="forecastcontainer">
            <div>
              <p>Wind: E 7 km/h</p>
              <p>Humidity: 87%</p>
            </div>
          </div>
          <div className="weekcontainer">
            <div className="days1">
              <p>Tue</p>
              <p>Wed</p>
            </div>
            <div className="temps">
              <p>21° / 9°</p>
              <p> 23° / 10°</p>
            </div>
          </div>
        </WeatherData>
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
