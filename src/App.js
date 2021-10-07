import {SideBar} from "./SideBar"
import { Index1 } from "./days/day1/Index";
import { Index2 } from "./days/day2/Index";
import { Index3 } from "./days/day3/Index";
import { Index4 } from "./days/day4/Index";
import { Index5 } from "./days/day5/Index";
import { Index6 } from "./days/day6/Index";
import { Index7 } from "./days/day7/Index";
import { Index8 } from "./days/day8/Index";
import { Index9 } from "./days/day9/Index";
import { Index10 } from "./days/day10/Index";
import { Index11 } from "./days/day11/Index";
import { Index12 } from "./days/day12/Index";
import { Index13 } from "./days/day13/Index";
import { Index14 } from "./days/day14/Index";
import { Index15 } from "./days/day15/Index";

import img from "./img/boots.png"
import styled from "styled-components";

const GridContainer = styled.div`
  
  display: grid;
  gap: 10px;
  margin-top: 10px;
  grid-template-columns: repeat(7, 250px);
  align-items: center;
  justify-content: center;
  padding: 0px 0px 10px 0px;
`;

const PageContainer = styled.div`
  display: flex;
  background: navajowhite;
  & > :nth-child(1){
    margin-right: 20px;
  }
`

const grid = true;
function App() {
  return (
    <PageContainer>
    <SideBar />
    <div>
      <GridContainer>
        <Index1 grid={grid} />
        <Index2 grid={grid} />
        <Index3 grid={grid} />
        <Index4 grid={grid} />
        <Index5 grid={grid} />
        <Index6 grid={grid} />
        <Index7 grid={grid} />
        <Index8 grid={grid} />
        <Index9 grid={grid} />
        <Index10 grid={grid} />
        <Index11 grid={grid} />
        <Index12 grid={grid} />
        <Index13 grid={grid} />
        <Index14 grid={grid} />
        <Index15 grid={grid} />
        {/* <img src={img} /> */}
      </GridContainer>
      </div>
    </PageContainer>
  );
}

export default App;
