import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header/Header";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
