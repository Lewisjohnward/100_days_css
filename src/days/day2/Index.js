import { useState, useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Div = styled.div`
  background: rgb(63, 175, 130);
`;

const animationLine1 = keyframes`
  0%{transform: translateY(5px);}
  10%{transform: translateY(5px);}
  30%{transform: translateY(10px);}
  50%{transform: translateY(22px);}
  100%{transform: translateY(22px) rotate(47deg);}
`;

const animationLine2 = keyframes`
  0%{transform: scale(1);}
  100%{transform: scale(0);}
`;

const animationLine3 = keyframes`
  0%{transform: translateY(-5px);}
  10%{transform: translateY(-5px);}
  30%{transform: translateY(-10px);}
  50%{transform: translateY(-22px);}
  100%{transform: translateY(-22px) rotate(-47deg);}
`;

const animationLine1Rev = keyframes`
  0%{transform:  translateY(22px) rotate(47deg);}
  50%{transform: translateY(22px) rotate(0deg);}
  70%{transform: translateY(10px);}
  90%{transform: translateY(5px);}
  100%{transform: translateY(0px);}
`;

const animationLine2Rev = keyframes`
  0%{transform: scale(0);}
  100%{transform: scale(1);}
`;

const animationLine3Rev = keyframes`
0%{transform:  translateY(-22px) rotate(-47deg);}
50%{transform: translateY(-22px) rotate(0deg);}
70%{transform: translateY(-10px);}
90%{transform: translateY(-5px);}
100%{transform: translateY(0px);}
`;

const LineContainer = styled.div`
  & div {
    background: white;
    
  }
    cursor: pointer;
    .oneopen {
      animation: ${animationLine1} ease 0.5s forwards;
    }
    .twoopen {
      animation: ${animationLine2} ease 0.5s forwards;
    }
    .threeopen {
      animation: ${animationLine3} ease 0.5s forwards;
    }

    .oneclose {
      animation: ${animationLine1Rev} ease 0.5s forwards;
    }
    .twoclose {
      animation: ${animationLine2Rev} ease 0.5s forwards;
    }
    .threeclose {
      animation: ${animationLine3Rev} ease 0.5s forwards;
    }
  

  
  }
`;

const Line = styled.div`
  width: 80px;
  height: 12px;
  margin: 10px;
  
  border-radius: 3px;
  box-shadow: 1px 1px 10px black; 
}  
`;

export const Index2 = ({ grid }) => {
  const [open, setOpen] = useState(false);

  const string = `
  .icon { 
      padding: 50px;    
      border-radius: 10px; 

      font-family: Arial, Helvetica, sans-serif;   
      text-align: center;    
      font-weight: 900;    
      color: white;
      text-shadow: 5px 3px 10px black;   

      background: rgb(2,0,36);   
      background: linear-gradient(60deg, rgb(16, 12, 85) 0%, rgb(25, 103, 167) 25%, rgb(125, 226, 247) 99%);
  }

  .number {
    font-size: 6rem;
    line-height: 60px;
  }
    
  .days {
    font-size: 3.5rem;
  }
    
  .challenge {
    font-size: 1rem;
  }
  `;

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  if (grid) {
    return (
      <Div className="icon">
        <LineContainer onClick={handleClick}>
          <Line className={`one${open ? "open" : "close"}`} />
          <Line className={`two${open ? "open" : "close"}`} />
          <Line className={`three${open ? "open" : "close"}`} />
        </LineContainer>
      </Div>
    );
  }

  return (
    <div className="day-container">
      <p className="day-text">2</p>
      <div className="container">
        <div>
          <Div className="icon">
            <LineContainer onClick={handleClick}>
              <Line className={`one${open ? "open" : "close"}`} />
              <Line className={`two${open ? "open" : "close"}`} />
              <Line className={`three${open ? "open" : "close"}`} />
            </LineContainer>
          </Div>
        </div>
        <pre>
          <code>{string}</code>
        </pre>
      </div>
    </div>
  );
};
