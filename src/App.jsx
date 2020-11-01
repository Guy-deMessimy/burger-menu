import "./styles.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div id="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <h1>Click to show menu</h1>
      </div>
    </div>
  );
}

export default App;