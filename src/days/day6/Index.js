import { useState, useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Div = styled.div`
  background: green;
  padding: 30px;
`;

const GraphContainer = styled.div`
  width: 100%;
  height: 75%;
`;

const Banner = styled.div`
  background: orange;
  display: flex;
  width: 100%;
  height: 25%;
`;
const Graphic = styled.div`
  background: white;
  width: 100%;
  height: 75%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.75rem;
`

const Title = styled.p`
  text-transform: uppercase;
  text-shadow: none;
`
const Date = styled.p`
text-shadow: none;
`

export const Index6 = ({ grid }) => {
  const string = ``;

  if (grid) {
    return (
      <Div className="icon">
        <GraphContainer>
          <Banner>
            <TitleContainer>
              <Title>weekly report</Title>
              <Date>date</Date>
            </TitleContainer>
            <TitleContainer>
              <Title>revenue</Title>
              <Date>343</Date>
            </TitleContainer>
          </Banner>
          <Graphic />
        </GraphContainer>
      </Div>
    );
  }

  return (
    <div className="day-container">
      <p className="day-text">2</p>
      <div className="container">
        <Div className="icon"></Div>
        <pre>
          <code>{string}</code>
        </pre>
      </div>
    </div>
  );
};
