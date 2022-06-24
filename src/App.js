import TodoContainer from "./components/TodoWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/index.css";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 80% 10%;
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

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <main>
          <TodoContainer />
        </main>

        <Footer />
      </Container>
    </div>
  );
}

export default App;
