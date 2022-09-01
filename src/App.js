import './App.css';
import Home from './pages/Home';
import Order from './pages/Order';
import About from './pages/About';
import Saved from './pages/Saved';
function App() {
  return (
    <div className="App">
      <Home/>
      <About />
      <Order/>
      <Saved/>
    </div>
  );
}

export default App;
