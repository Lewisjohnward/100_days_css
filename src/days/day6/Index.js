import { useState, useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Div = styled.div`
  background: mediumseagreen;
  padding: 50px 25px;
  text-shadow: none;
  font-size: 0.75em;
`;

const Banner = styled.div`
  background: orange;
  border-radius: 5px 5px 0px 0px;
  padding-top: 2%;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 25%;
`;
const Graphic = styled.div`
  background: white;
  border-radius: 0px 0px 5px 5px;
  width: 100%;
  height: 75%;


  polyline {
    fill: none;
    stroke: steelblue;
    stroke-width: 2;
    stroke-linecap: round;
  }

  .days {
    display: flex;
    justify-content: space-between;
    font-size: 0.8em;
    color: darkgray;
  }
`;

const BannerLeftContainer = styled.div`
  .title {
    text-transform: uppercase;
  }

  .date {
    text-align: left;
    font-weight: 100;
    font-size: 0.85em;
  }
`;

const BannerRightContainer = styled.div`
  .subheading {
    text-align: right;
    font-weight: 100;
    font-size: 0.85em;
  }
`;

const LegendContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: darkgray;
  font-size: 0.8em;
  font-weight: 100;
`;

const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .legendcolor1 {
    height: 2px;
    width: 10px;
    background: salmon;
    border-radius: 5px;
  }
  .legend {
    margin-right: 5px;
    margin-left: 5px;
  }
  .legendcolor2 {
    height: 2px;
    width: 10px;
    background: cadetblue;
    border-radius: 5px;
  }
`;

export const Index6 = ({ grid }) => {
  const string = ``;

  if (grid) {
    return (
      <Div className="icon">
        <Banner>
          <BannerLeftContainer>
            <p className="title">weekly report</p>
            <p className="date">01. Feb - 07. Feb</p>
          </BannerLeftContainer>
          <BannerRightContainer>
            <p className="subheading">Revenue</p>
            <p>$3621.79</p>
          </BannerRightContainer>
        </Banner>

        <Graphic>
          <LegendContainer>
            <Legend>
              <div className="legendcolor1" />
              <p className="legend">Views</p>
            </Legend>
            <Legend>
              <div className="legendcolor2" />
              <p className="legend">Purchases</p>
            </Legend>
          </LegendContainer>
          <svg height={"50px"}>
            <polyline points="9,46 50,12 90,23 130,11 151,38 185,48 195,19"></polyline>
          </svg>
          <div className="days">
            <p>Mon</p>
            <p>Tues</p>
            <p>Wed</p>
            <p>Thurs</p>
            <p>Fri</p>
            <p>Sat</p>
            <p>Sun</p>
          </div>
        </Graphic>
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
