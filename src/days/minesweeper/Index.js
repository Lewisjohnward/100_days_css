import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Icon = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  opacity: 1;
  text-shadow: none;
  text-align: left;
  font-weight: 300;
  font-size: 0.9em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  color: black;
  background: none;

`;

const BannerContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: red;
  background: lightgray;
  font-weight: 700;
`;

const NumberContainer = styled.div`
  border: 1px solid black;
`;

const FaceContainer = styled.div`
  border: 1px solid black;
`;

const FieldContainer = styled.div`
  height: 90%;
  width: 100%;
`;
const Field = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid: repeat(10, 1fr) / repeat(10, 1fr);
`;

const Square = styled.div`
  height: 100%;
  width: 100%;
  background: lightgray;
  color: black;
  font-size: 0.6em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 2px 2px 3px white, inset -2px -2px 2px gray;
  

  &:active{
    transform: translateY(1px);
  }
  &:hover{
    transform: translateY(-1px);
    box-shadow: inset 2px 2px 3px white, inset -2px -2px 2px gray, 0px 0px 10px rgba(0, 0, 0, 0.4);
  }

`

const array = new Array(100).fill(0)
console.log(array)
export const Index = ({ grid }) => {
  if (grid) {
    return (
      <Icon className={`icon`}>
        <BannerContainer>
          <NumberContainer>032</NumberContainer>

          <FaceContainer>:)</FaceContainer>

          <NumberContainer>0016</NumberContainer>
        </BannerContainer>
        <FieldContainer>
          <Field>
            {array.map(() => <Square />)}
          </Field>
        </FieldContainer>
      </Icon>
    );
  }
};
