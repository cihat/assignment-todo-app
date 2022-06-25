import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 50px;
  margin-top: auto;
  padding: 20px;

  @media (min-width: 768px) {
    margin-top: 12px;
  }

  p {
    text-align: center;
    color: var(--color-white);
    a {
      color: var(--color-white);
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <p>
        Created by&nbsp;
        <a href="https://github.com/cihat/assignment-todo-app">
          <span role="img" aria-label="linkedin">
            @cihat/assignment-todo-app
          </span>
        </a>
      </p>
    </FooterStyle>
  );
};

export default Footer;
