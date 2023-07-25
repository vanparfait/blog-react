import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="contenu">
        <Home />
      </div>
    </div>
  );
}

export default App;
