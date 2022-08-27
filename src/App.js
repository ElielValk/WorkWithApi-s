import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes }from 'react-router-dom';
import { Home } from './Components/Home';
import {Quotes } from './Components/Quotes'
function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/Quotes" element={<Quotes />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
