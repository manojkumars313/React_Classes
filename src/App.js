import "./App.css";
import Introduction from "./Component/Introduction";
import Counter from "./Component/Counter";
import Timer from "./Component/Timer";

function App() {
  return (
    <div className="App">
      <Introduction ageProp={10} nameProp={"Manoj"} />
      <Counter />
      <Timer />
    </div>
  );
}

export default App;
