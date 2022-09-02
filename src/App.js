import "./App.css";
import Home from "./pages/Home";
import Order from "./pages/Order";
import OrderDetails from "./pages/OrderDetails"
import About from "./pages/About";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={  <Home />} />
          <Route path="/about" element={  <About />} />
          <Route path="/order" element={  <Order />} />
          <Route path="/order/:id" element={  <OrderDetails />} />
          <Route path="/saved" element={  <Saved />} />
          

        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
