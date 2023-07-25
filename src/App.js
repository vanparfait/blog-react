import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Ajouter from "./components/Ajouter/Ajouter";
import BlogDetail from "./components/BlogDetails/BlogDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="contenu">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ajout" element={<Ajouter />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
