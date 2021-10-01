import {useState} from "react"
import styled, { keyframes } from "styled-components";

const Icon = styled.div`
  position: relative;
  padding: 25px;
  background: #375360;
  text-shadow: none;
  overflow: hidden;

  .hidden{
    display: none;
  }
  .options {
    position: absolute;
    top: 15%;
    left: 8%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 45%;
    height: 70%;
    padding-right: 2%;
    background: #516B77;
    z-index: 0;
    border-radius: 5px 0px 0px 5px;
    color: rgba(178, 216, 234, 1);
    font-size: 0.7rem;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .optionsopen{
    transition: transform 0.4s;
    transform: translate(60px, 0);
  }
  .optionsclose{
    transition: transform 0.4s;
    transform: translate(0px, 0);
  }

  .optioncontainer {
    display: flex;
    height: 100%;
    width: 100%;
    padding-left: 5px;
    align-items: center;
    cursor: pointer;
  }

  .optioncontainer:hover{
    transition: background 0.1s;
    background: #50626B;
  }

  .option{
    margin-left: 5px;
  }


  .sign {
    cursor: pointer;
    padding: 0px 1px;
    font-size: 0.5rem;
    color: rgba(178, 216, 234, 0.9);
    border: 1px solid rgba(178, 216, 234, 0.4);
  }
  .menuopen{
    transition: transform 0.4s;
    transform: translate(90px, 0);
  }

  .menuclose{
    transition: transform 0.4s;
    transform: translate(0px, 0);
  }

  .card {
    position: relative;
    z-index: 3;
    height: 100%;
    width: 100%;
    border-radius: 2px;
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  }
  
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    height: 25%;
    background: #4297BF;
    text-align: center;
    .menuicon {
      cursor: pointer;
      .line {
        position: relative;
        height: 3px;
        width: 20px;
        margin: 9px 0px;
        border-radius: 5px;
        background: #B2D8EA;
      }
      .dot {
        position: absolute;
        z-index: 1;
        right: 0;
        top: -2px;
        width: 7px;
        height: 7px;
        border-radius: 15px;
        background: #B2D8EA;
        outline: 1px solid #4297BF;
        
      }
    }

    .title {
      font-size: 0.9rem;
    }
    
  }
 

  .body {
    position: relative;
    height: 75%;
    padding-left: 20px;
    padding-right: 10px;
    background: white;
    color: gray;
    font-size: 0.7rem;
    font-weight: 100;
    
    .line {
      position: absolute;
      height: 100%;
      margin-left: 15px;
      left: 0px;
      width: 3px;
      background: gray;
      opacity: 0.1;
      z-index: 1;
    }

    .notecontainer {
      position: relative;
      padding: 5px 5px  0px 8px;

      
      .dot {
        position: absolute;
        z-index: 2;
        left: -8px;
        top: 8px;
        height: 9px;
        width: 9px;
        border-radius: 25px;
        background: white;
        border: 2px solid #4297BF;
        outline: 2px solid white;
      }

      .timecontainer {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
      }

      .textcontainer {
        text-align: left;
        font-size: 0.8rem;
      }
      .usertext {
        font-weight: bold;
      }
      .sign {
        
        padding: 0px 1px;
        font-size: 0.5rem;
        color: rgba(178, 216, 234, 0.9);
        border: 1px solid rgba(178, 216, 234, 0.4);
      }
    }
  }
  
`;
export const Index8 = ({ grid }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const string = ``;

  const handleMenuToggle= () => {
    setMenuOpen(prev => !prev)
  }

  if (grid) {
    return (
      <Icon className="icon">
        <div className={`card ${menuOpen ? "menuopen" : "menuclose"}`}>
          <div className="header">
            <div className="menuicon" onClick={handleMenuToggle}>
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
          <div className="body">
          <div className="line" />
            <div className="notecontainer">
              
              <div className="dot" />
              <div className="timecontainer">
                <p>9:24 AM</p>
              </div>
              <div className="textcontainer">
                <p><span className="usertext">John Walker</span> posted a photo on your wall.</p>
              </div>
            </div>

             <div className="notecontainer">
              <div className="dot" />
              <div className="timecontainer">
                <p>8:19 AM</p>
              </div>
              <div className="textcontainer">
                <p><span className="usertext">Alice Walker</span> commented your last post.</p>
              </div>
            </div>

            <div className="notecontainer">
              <div className="dot" />
              <div className="timecontainer">
                <p>Yesterday</p>
              </div>
              <div className="textcontainer">
                <p><span className="usertext">Luke Wayne</span> added you as a friend.</p>
              </div>
            </div> 
        </div>
        </div>
        <div className={`options ${menuOpen ? "optionsclose" : "optionsopen"}`}>
          <div className="optioncontainer">
            <div className="sign">
              <p>f0</p>
              <p>02</p>
            </div>
            <div className="option">
              <p>Dashboard</p>
            </div>
          </div>
          <div className="optioncontainer">
            <div className="sign">
              <p>f0</p>
              <p>02</p>
            </div>
            <div className="option">
              <p>Notifications</p>
            </div>
          </div>
          <div className="optioncontainer">
            <div className="sign">
              <p>f0</p>
              <p>02</p>
            </div>
            <div className="option">
              <p>Messages</p>
            </div>
          </div>
          <div className="optioncontainer">
            <div className="sign">
              <p>f0</p>
              <p>02</p>
            </div>
            <div className="option">
              <p>Settings</p>
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
