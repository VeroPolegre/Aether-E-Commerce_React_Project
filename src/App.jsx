import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { GameProvider } from "./context/GameContext/GameState";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";
import Library from "./pages/Library/Library";
import Profile from "./pages/Profile/Profile";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";

import Categories from "./components/Categories/Categories";
import Action from "./components/Categories/Action/Action";
import Role_Playing from "./components/Categories/Role_Playing/Role_Playing";
import Strategy from "./components/Categories/Strategy/Strategy";
import Adventure from "./components/Categories/Adventure/Adventure";
import Simulation from "./components/Categories/Simulation/Simulation";
import Sports_and_Racing from "./components/Categories/Sports_and_Racing/Sports_and_Racing";
import Join from "./pages/Login/Join/Join";
import { UserProvider } from "./context/UserContext/UserState";

function App() {
  return (
    <div className="bg-[#1b2838]">
      <div className="lg:max-w-[90vw] xl:max-w-[80vw] mx-auto">
        <Router>
          <Header />
          <Categories />
          <GameProvider>
            <UserProvider>
              <Routes>
                <Route path="/join" element={<Join />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/library" element={<Library />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/login" element={<Login />}></Route>

                <Route path="/categories/action" element={<Action />}></Route>
                <Route
                  path="/categories/role-playing"
                  element={<Role_Playing />}
                ></Route>
                <Route
                  path="/categories/strategy"
                  element={<Strategy />}
                ></Route>
                <Route
                  path="/categories/adventure"
                  element={<Adventure />}
                ></Route>
                <Route
                  path="/categories/simulation"
                  element={<Simulation />}
                ></Route>
                <Route
                  path="/categories/sports-and-racing"
                  element={<Sports_and_Racing />}
                ></Route>
              </Routes>
            </UserProvider>
          </GameProvider>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
