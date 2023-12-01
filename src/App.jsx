import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { GameProvider } from "./context/GameContext/GameState";
import { UserProvider } from "./context/UserContext/UserState";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Join from "./pages/Login/Join/Join";
import Confirmation from "./pages/Confirmation/Confirmation";
import Login from "./pages/Login/Login";
import Cart from "./components/Cart/Cart";
import Library from "./pages/Library/Library";
import Community from "./pages/Community/Community";
import Profile from "./pages/Profile/Profile";
import Footer from "./pages/Footer/Footer";

import Categories from "./components/Categories/Categories";
import Action from "./components/Categories/Action/Action";
import Role_Playing from "./components/Categories/Role_Playing/Role_Playing";
import Strategy from "./components/Categories/Strategy/Strategy";
import Adventure from "./components/Categories/Adventure/Adventure";
import Simulation from "./components/Categories/Simulation/Simulation";
import Sports_and_Racing from "./components/Categories/Sports_and_Racing/Sports_and_Racing";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="bg-[#1b2838]">
      <div className="lg:max-w-[90vw] xl:max-w-[80vw] mx-auto">
        <Router>
          <GameProvider>
            <UserProvider>
              <Header />
              <Categories />
              <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/join" element={<Join />}></Route>
                <Route
                  path="/confirmed/:email"
                  element={<Confirmation />}
                ></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="/library" element={<NotFound />}></Route>
                <Route path="/community" element={<NotFound />}></Route>
                <Route path="/profile" element={<Profile />}></Route>

                <Route path="/categories/action" element={<NotFound />}></Route>
                <Route
                  path="/categories/role-playing"
                  element={<NotFound />}
                ></Route>
                <Route
                  path="/categories/strategy"
                  element={<NotFound />}
                ></Route>
                <Route
                  path="/categories/adventure"
                  element={<NotFound />}
                ></Route>
                <Route
                  path="/categories/simulation"
                  element={<NotFound />}
                ></Route>
                <Route
                  path="/categories/sports-and-racing"
                  element={<NotFound />}
                ></Route>
                <Route path="*" element={<NotFound />}></Route>
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
