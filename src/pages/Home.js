import React from "react";
import TodoContainer from "../components/TodoWrapper";
import Header from "../components/Header/HeaderNew";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 8% 87% 5%;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-gap: 0;
  background-color: #ff6f91;
  //for mobile
  @media (min-width: 768px) {
    background-color: pink;
  }
  @media (min-width: 1440px) {
    background-color: #bba3a36d;
  }
`;

const Home = () => {
  return (
    <Container>
      <Header/>
      <main>
        <TodoContainer />
      </main>

      <Footer />
    </Container>
  );
};

export default Home;
