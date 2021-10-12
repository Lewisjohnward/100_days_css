import styled from "styled-components"

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    color: black;
    font-size: 2em;
`

export const Label = ({day}) => {
    return (
        <Container>
            {day}
        </Container>
    )
}
