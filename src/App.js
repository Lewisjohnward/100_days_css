import { Index1 } from "./days/day1/Index";
import { Index2 } from "./days/day2/Index";
import { Index3 } from "./days/day3/Index";
import { Index4 } from "./days/day4/Index";
import { Index5 } from "./days/day5/Index";
import { Index6 } from "./days/day6/Index";
import { Index7 } from "./days/day7/Index";
import { Index8 } from "./days/day8/Index";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(7, 250px);
  align-items: center;
  justify-content: center;
  padding: 10px 0px 10px 0px;
`;

const grid = true;
function App() {
  return (
    <>
      <GridContainer>
        <Index1 grid={grid} />
        <Index2 grid={grid} />
        <Index3 grid={grid} />
        <Index4 grid={grid} />
        <Index5 grid={grid} />
        <Index6 grid={grid} />
        <Index7 grid={grid} />
        <Index8 grid={grid} />
      </GridContainer>
    </>
  );
}

export default App;
