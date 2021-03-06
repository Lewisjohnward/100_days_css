export const Index1 = ({ grid }) => {
  const string = `.icon { 
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

  if (grid) {
    return (
      <div className="icon">
        <p className="number">100</p>
        <p className="days">DAYS</p>
        <p className="challenge">CSS CHALLENGE</p>
      </div>
    );
  }

  return (
    <div className="day-container">
      <p className="day-text">1</p>
      <div className="container">
        <div>
          <div className="icon">
            <p className="number">100</p>
            <p className="days">DAYS</p>
            <p className="challenge">CSS CHALLENGE</p>
          </div>
        </div>
        <pre>
          <code>{string}</code>
        </pre>
      </div>
    </div>
  );
};
