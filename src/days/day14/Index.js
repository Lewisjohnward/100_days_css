import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Icon = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: visible;
  background: darkorange;
  opacity: 1;
  text-shadow: none;
  color: black;
  text-align: left;
  font-weight: 300;
  font-size: 0.9em;

  .textcontainer {
    height: 80%;
    width: 80%;
    background: white;
    border-radius: 5px;
    padding: 5px;

    .title {
      font-size: 0.9em;
      text-decoration: underline;
    }

    .svgcontainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
      padding-left: 5px;
    }

    .propertiescontainer {
      display: flex;
    }

    .propertiestextcontainer{
      padding-right: 5px;
    }

    .shapetitle {
      font-size: 0.9em;
    }

    p {
      font-size: 0.8em;
    }

    svg > * {
      fill: firebrick;
    }

    .buttoncontainer{
      position: absolute;
      top: 50%;
      width: 20px;
      height: 20px;
      background: gainsboro;
      border-radius: 50%;
      padding: 0;
      margin: 0;

      button{
        position: absolute;
        top:13%;
        left: 15%;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        border: none;
        background: darkred;
        box-shadow: inset 50% 50% 10% 0px rgba(0, 0, 0, 1);

        &:active{
          background: navajowhite;
          transform: translateY(2px);
        }

      }
    }

    .left{
      left: 1%;
    }

    .right{
      right: 1%;
    }

  }

  
`;

const height = 50;
const width = 50;

export const Index14 = ({ grid }) => {
  const [toggle, setToggle] = useState(false);
  const string = ``;

  if (grid) {
    return (
      <Icon className="icon" onClick={() => setToggle((prev) => !prev)}>
        <div className="textcontainer">
          <p className="title">SVG</p>
          <div className="svgcontainer">
            <div>
              <p className="shapetitle">Rect</p>

              <div className="propertiescontainer">
                <div className="propertiestextcontainer">
                  <p>cx</p>
                  <p>cy</p>
                </div>
                <div className="propertiestextcontainer">
                  <p>r</p>
                </div>
                <div className="propertiestextcontainer">
                  <p>fill</p>
                  <p>stroke</p>
                </div>
              </div>
            </div>
            <svg height={height} width={width}>
              <rect height={20} width={20}  x={12} y={10} />

            </svg>
          </div>
          <div className="svgcontainer">
            <div>
              <p className="shapetitle">Circle</p>

              <div className="propertiescontainer">
                <div className="propertiestextcontainer">
                  <p>height</p>
                  <p>width</p>
                </div>
                <div className="propertiestextcontainer">
                  <p>x</p>
                  <p>y</p>
                </div>
                <div className="propertiestextcontainer">
                  <p>fill</p>
                  <p>stroke</p>
                </div>
              </div>
            </div>
            <svg height={height} width={width}>
              <circle cx={20} cy={20}  r={12} />

            </svg>
          </div>

          <div className="svgcontainer">
            <div>
              <p className="shapetitle">Ellipse</p>

              <div className="propertiescontainer">
                <div className="propertiestextcontainer">
                  <p>cx</p>
                  <p>cy</p>
                </div>
                <div className="propertiestextcontainer">
                  <p>rx</p>
                  <p>ry</p>
                </div>
                <div className="propertiestextcontainer">
                  <p>fill</p>
                  <p>stroke</p>
                </div>
              </div>
            </div>
            <svg height={height} width={width}>
            <ellipse cx={20} cy={20}  rx={12} ry={9} />

            </svg>
          </div>
          <div className="right buttoncontainer"><button /></div>
          <div className="left buttoncontainer"><button /></div>
        </div>
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
