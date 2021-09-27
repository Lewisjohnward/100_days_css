import { Index1 } from "./days/day1/Index";
import { Index2 } from "./days/day2/Index";
import { Index3 } from "./days/day3/Index";
import { Index4 } from "./days/day4/Index";
import { Index5 } from "./days/day5/Index";
import { Index6 } from "./days/day6/Index";

import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(7, 250px);
  grid-template-rows: repeat(7, 250px);
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

const grid = true
function App() {
  return (
    <>
      <GridContainer>
        <Index1 grid={grid}/>
        <Index2 grid={grid}/>
        <Index3 grid={grid}/>
        <Index4 grid={grid}/>
        <Index5 grid={grid}/>
        <Index6 grid={grid}/>
      </GridContainer>
    </>
  );
}

export default App;
