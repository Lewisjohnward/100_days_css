import { useState } from "react";
import styled, { keyframes } from "styled-components";


const definitionAnimation = keyframes`
  from {opacity: 0; top: -450%;}
  to {opacity: 1; top: -350%;}
`

const Icon = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: hidden;

  background: darkturquoise;
  opacity: 1;
  text-shadow: none;
  color: white;
  text-align: left;
  font-weight: 300;
  font-size: 0.9em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const TextContainer = styled.div`
  position: absolute;
  top: 20%;
  height: 75%;
  margin: 0 7%;
  font-weight: 600;
  font-size: 1.2em;
 

  &::before {
    content: "„";
    position: absolute;
    top: -50%;
    left: -9%;
    font-size: 6em;
    opacity: 0.3;
  }

  &::after {
    content: "Albert Einstein";
    position: absolute;
    bottom: 5%;
    font-size: 1em;
    opacity: 1;
    font-weight: 300;
    font-style: italic;
  }

  span{
    position: relative;
    padding: 1% 1%;
    background: steelblue;
    cursor: pointer;

    &:hover{
      &::before{
        content: "Obsession, a persistent disturbing preoccupation with an often unreasonable idea or feeling";
        background: steelblue;
        text-align: left;
        padding: 5px 10px;
        position: absolute;
        left: 0;
        width: 200%;
        font-size: 0.7em;
        animation: ${definitionAnimation} linear 0.2s forwards;
      }
    }
  }
`;

const SpeechMarks = styled.p``;

const height = 50;
const width = 50;

export const Index16 = ({ grid }) => {
  const [toggle, setToggle] = useState(false);
  const string = ``;

  if (grid) {
    return (
      <Icon className="icon" onClick={() => setToggle((prev) => !prev)}>
        <TextContainer>
          <p className="quotation">
            I know quite certainly that I myself have no special talent;
            curiosity, <span>obsession</span> and dogged endurance, combined with
            self-criticism have brought me to my ideas.
          </p>
        </TextContainer>
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
