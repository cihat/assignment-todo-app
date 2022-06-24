import React from "react";
import styled from "styled-components";

const Header = () => {
  const HeaderContainer = styled.header`
    text-align: center;
    grid-area: header;
    padding: 1rem;
    margin-bottom: 2rem;
    background-color: #e6c68a97;

    /* &::before {
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
      content: "";
    } */
  `;

  const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    text-align: center;
    font-size: 56px;
    transform: skewY(-5deg);
    letter-spacing: 4px;
    word-spacing: -8px;
    color: tomato;
    text-shadow: -1px -1px 0 firebrick, -2px -2px 0 firebrick,
      -3px -3px 0 firebrick, -4px -4px 0 firebrick, -5px -5px 0 firebrick,
      -6px -6px 0 firebrick, -7px -7px 0 firebrick, -8px -8px 0 firebrick,
      -30px 20px 40px dimgrey;
  `;

  return (
    <HeaderContainer>
      <Title>Todo App</Title>
    </HeaderContainer>
  );
};

export default Header;
