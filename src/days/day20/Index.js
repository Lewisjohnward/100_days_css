import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { RiUploadCloudLine } from "react-icons/ri";

const Icon = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  background: linear-gradient(
    60deg,
    rgb(119, 186, 119) 0%,
    rgb(115, 168, 221) 99%
  );
  opacity: 1;
  text-shadow: none;
  text-align: left;
  font-weight: 300;
  font-size: 0.9em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  font-family: "Open Sans", Helvetica, sans-serif;
`;

const Frame = styled.div`
  height: 82%;
  width: 85%;
  background: white;
  border-radius: 7px;
`;
const Banner = styled.div`
  padding: 15px 0px;
  text-align: center;
  color: rgb(158, 168, 177);
  border-bottom: 1px solid rgb(158, 168, 177);
`;

const UploadIcon = styled(RiUploadCloudLine)`
  display: block;
  width: 115px;
  height: 70px;
  padding: 5px;
  margin: 10% auto;
  color: rgb(158, 168, 177);

  border: 1px dashed gray;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = styled.div`
  position: relative;
  z-index: 99;
  width: 60%;
  height: 12%;
  margin: auto;
  background: rgb(93, 223, 103);
  border-radius: 5px;

  &::after {
    content: "Upload file";
    position: absolute;
    color: white;
    z-index: 1;
    left: 25%;
    top: 3px;
    width: 99%;
    height: 100%;
    font-size: 0.9em;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    left: 1px;
    top: -2px;
    width: 99%;
    height: 100%;
    border-bottom: 2px solid limegreen;
    border-radius: 4px;
  }

  &:hover {
    text-shadow: 0px 0px 10px 0px white;
    box-shadow: 0px 0px 10px 0px rgb(93, 223, 103);
    cursor: pointer;
  }
`;
const Input = styled.input.attrs({
  type: "file",
})`
  display: none;
`;

export const Index = ({ grid }) => {
  const inputFile = useRef(null)

  const onButtonClick = () => {
    // `current` points to the mounted file input element
   inputFile.current.click();
  };

  if (grid) {
    return (
      <Icon className={`icon`}>
        <Frame>
          <Banner>Drop file to upload</Banner>
          <Input ref={inputFile}/>
          <UploadIcon onClick={onButtonClick}/>
          <Button onClick={onButtonClick}/>
        </Frame>
      </Icon>
    );
  }
};
