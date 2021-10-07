import {useState} from "react"
import styled, { keyframes } from "styled-components";

const Icon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  background: orangered;
  opacity: 0.8;
  box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.3);
  text-shadow: none;
  
`

const Container = styled.div`
  position: relative;
  height: 75%;
  width: 50%;
  background: lightsalmon;
  border-radius: 25px;
  

`
const buttonAnimationOn = keyframes`
  from {top: 0%;}
  to {top: 50%;}
`

const buttonAnimationOff = keyframes`
  from {top: 50%;}
  to {top: 0%;}
`

const SwitchContainer = styled.div`
  position: absolute;
  top: 12%;
  left: 25%;
  height: 75%;
  width: 50%;
  background: black;
  border-radius: 50px;

  .on{
    animation: ${buttonAnimationOn} linear 0.5s forwards;
    background: black;
  }
  .off{
    animation: ${buttonAnimationOff} linear 0.5s forwards;
    background: tomato;
  }
`



const Switch = styled.div`
  position: absolute;
  left: -5%;
  z-index: 99;
  height: 50%;
  width: 110%;
  background: tomato;
  border-radius: 50px;
  cursor: pointer;

`
const SwitchReflection = styled.div`
  position: absolute;
  top: ${({top}) => top}%;
  right: ${({right}) => right}%;
  height: 4%;
  width: 20%;
  background: white;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 5px rgba(255, 255, 255, 0.2);
`

const Black = styled.div`
  position: absolute;
  z-index: 98;
  height: 100%;
  width: 100%;

  opacity: 0.9;
  background: black;
`

export const Index11 = ({ grid }) => {
  const [toggle, setToggle] = useState(false)
  const string = ``;

  if (grid) {
    return (
      <Icon className="icon">
        <Container>
          <SwitchContainer>
            <Switch className={`${toggle ? "on" : "off"}`} onClick={() => setToggle(prev => !prev)}>
            </Switch>
          </SwitchContainer>
          
        </Container>
    {toggle && <Black>
    </Black> }
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
