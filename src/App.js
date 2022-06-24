import TodoContainer from "./containers/Todo";
import Header from "./components/Header";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TodoContainer />
      </main>
    </div>
  );
}

export default App;
