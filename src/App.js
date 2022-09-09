import "./App.css";
import Home from "./pages/Home";
import Order from "./pages/Order";
import OrderDetails from "./pages/OrderDetails";
import About from "./pages/About";
import Saved from "./pages/Saved";
import Gallery from "./pages/Gallery";
import { RoomProvider } from "./context";
import Navbar from "./components/Navbar";
import PacmanLoader from "react-spinners/PacmanLoader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <RoomProvider>
      <Router>
        <Navbar />
        {loading ? (
          <div className="pacman">
            <PacmanLoader color={"#f0a8c6"} loading={loading} size={50} />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/order" element={<Order />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/order/:id" element={<OrderDetails />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        )}
      </Router>
    </RoomProvider>
  );
}

export default App;
