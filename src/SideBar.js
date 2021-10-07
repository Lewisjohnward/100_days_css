import styled from "styled-components";

const Container = styled.div`
  width: 70px;
  height: ${({ height }) => height}px;
  background: tan;
  color: brown;
  
  font-size: 2em;
`;


const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 50%;
    opacity: 0.7;

    > *:hover {
        transform: scale(1.3);
    }
    > *:active {
        color: red;
    }
    
`

const height = window.innerHeight;
export const SideBar = () => {
  return (
    <Container height={height}>
      <IconContainer>
        <i className="fab fa-github"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fas fa-envelope-open-text"></i>
        <i class="fas fa-share-square"></i>
      </IconContainer>
    </Container>
  );
};
