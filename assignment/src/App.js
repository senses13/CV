import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          </Routes>
          </BrowserRouter>
      
    </div>
  );
}

export default App;
