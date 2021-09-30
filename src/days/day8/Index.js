import styled, { keyframes } from "styled-components";

const Icon = styled.div`
  padding: 30px;
  text-shadow: none;

  .card {
    height: 100%;
    width: 100%;

    overflow: hidden;

    border-radius: 5px;
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    height: 25%;
    background: cadetblue;
    text-align: center;

    > * {
      
    }
    .menuicon {
      .line {
        position: relative;
        height: 3px;
        width: 30px;
        margin: 5px 0px;
        background: skyblue;
      }
      .dot {
        position: absolute;
        z-index: 1;
        right: 0;
        top: -1px;
        width: 5px;
        height: 5px;
        border-radius: 15px;
        background: skyblue;
        outline: 1px solid cadetblue;
        
      }
    }

    .title {
      font-size: 0.9rem;
    }
    .sign {
      font-size: 0.5rem;
      color: white;
      border: 1px solid white;
      

    }
  }

  .body {
    height: 75%;
    background: white;
  }
`;
export const Index8 = ({ grid }) => {
  const string = ``;

  if (grid) {
    return (
      <Icon className="icon">
        <div className="card">
          <div className="header">
            <div className="menuicon">
              <div className="line">
                <div className="dot" />
              </div>
              <div className="line" />
            </div>
            <div className="title">
              <p>Notifications</p>
            </div>

            <div className="sign">
            <p>f0</p>
            <p>02</p>
            </div>
          </div>
          <div className="body"></div>
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
