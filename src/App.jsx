import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="bg-[#1b2838]">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          {/*Categories */}
        </Routes>
        {/*Browse*/}
        <Footer />
      </Router>
      <div className="h-screen"></div>
    </div>
  );
}

export default App;
