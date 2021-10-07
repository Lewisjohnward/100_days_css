const Container = styled.div`
  //Style Container
  background: yellow;

  //Reference a child element
  p {
  }
  //Reference a class child element
  .classname {
  }
  //Reference all children
  > * {
  }

  //Reference all
  * {
  }

  //Target all children of
  .background,
  .foreground > * {
    opacity: 1;
  }

  //hover
  &:hover {
  }

  If you put selectors in without the ampersand, they will refer to children of the component.


  //SELECTS THE ODD CHILDREN OF THE SVG ELEMENT 
  svg > :nth-child(odd) {
    animation: ${circleAnimation} linear 20s infinite;
    transform-origin: 50% 50%;
  }

  //SELECTS THE CIRCLES THAT ARE EVEN
    circle:nth-child(odd) {
    animation: ${circleAnimation} linear 20s infinite;
    transform-origin: 50% 50%;
  }
`;

stroke-linejoin miter round bevel
