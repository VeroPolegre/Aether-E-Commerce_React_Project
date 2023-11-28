import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { GameProvider } from "./context/GameContext/GameState";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Categories from "./components/Categories/Categories";
import Library from "./pages/Library/Library";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="bg-[#1b2838]">
      <div className="lg:max-w-[90vw] xl:max-w-[80vw] mx-auto">
        <Router>
          <Header />
          <Categories />
          <GameProvider>
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/library" element={<Library />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </GameProvider>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
