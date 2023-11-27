import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="bg-[#1b2838]">
      <div className="lg:max-w-[90vw] xl:max-w-[80vw] mx-auto">
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
          {/*Browse*/}
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
