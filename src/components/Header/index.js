import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: header;
  padding: 8px;
  margin-bottom: 1rem;
  background-color: rgb(var(--color-yellow), 0.2);
`;

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  font-family: Raleway, sans-serif, "Roboto";
  color: var(--color-blue);
  font-size: 56px;
  -webkit-text-stroke: 2px white;
  -webkit-background-clip: text;
  /* -webkit-text-fill-color: transparent; */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Todo App</Title>
    </HeaderContainer>
  );
};

export default Header;
