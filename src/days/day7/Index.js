import styled, {keyframes} from "styled-components";


const buttonAnimation = keyframes`
  100%{color: white; background: rgb(85, 75, 64);}
`


const Icon = styled.div`
  background: linear-gradient(90deg, navajowhite 0%, chocolate 99%);
  text-shadow: none;
  color: #786450;
  padding: 30px 15px;
  font-size: 0.81em;
  
  

  .cardcontainer {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;


    border-radius: 2%;
    overflow: hidden;
    background: oldlace;
    box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.4);
  }

  .main {
    margin: 0% 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
  }

  .piccontainer{
    position: relative;

    img {
      height: 70px;
      width: 70px;
      border-radius: 50%;
    }

    .circle1 {
      position: absolute;
      width: 90%;
      top: -3px;
      left: 5px;
      height: 105%;
      padding: 5px;
      border-radius: 150px;
      border: 1px solid black;
      border-color: #786450 transparent #786450 #786450;
      transition: transform ease 0.5s;

      &:hover{
        transform: rotate(180deg);
      }
    }
  }
  

  .name {
    margin-top: 10%;
  }

  .fontsmall {
    font-size: 0.7em;
    font-weight: 200;
  }

  .buttoncontainer {
    display: flex;
    flex-direction: column;

    button {
      font-weight: 900;
      font-size: 0.8em;
      padding: 3px 0px;
      color: #786450;
      border: 1px solid gray;
      background: none;
      border-radius: 50px;
      margin-bottom: 5px;
      transition: color 0.5s, background 0.5s ease;
      &:hover {
        color: white;
        background: rgba(85, 75, 64, 0.8);
      }
    }
  }

  .side {
    width: 40%;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 33%;
      background: #F5E8DF;
      margin-bottom: 2px;
      cursor: pointer;
      transition: background 0.5s ease;
      &:hover {
        background: rgba(85, 75, 64, 0.2);
      }
    }
  }

`;

export const Index7 = ({ grid }) => {
  const string = ``;

  if (grid) {
    return (
      <Icon className="icon">
        <div className="cardcontainer">
          <div className="main">
            <div className="pic">
              <div className="piccontainer">
              <div className="circle2" />
              <div className="circle1" />
              <img
                src={"https://100dayscss.com/codepen/jessica-potter.jpg"}
                alt="img"
              />
              </div>
              <p className="name">Jessica Potter</p>
              <p className="fontsmall">Visual Artist</p>
            </div>
            <div className="buttoncontainer">
              <button>Follow</button>
              <button>Message</button>
            </div>
          </div>
          <div className="side">
            <div>
              <p className="num">523</p>
              <p className="fontsmall">Posts</p>
            </div>
            <div>
              <p className="num">1387</p>
              <p className="fontsmall">Likes</p>
            </div>
            <div>
              <p className="num">146</p>
              <p className="fontsmall">Follower</p>
            </div>
          </div>
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
