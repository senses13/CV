import './App.css';
import Login from './components/login.tsx';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from './components/signup.tsx';
import Home from './components/home.tsx';
import Form from './components/form.jsx'
import { Protected, Protect } from "./protectedroute.tsx";
import Resetpass from './components/resetpass.tsx';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Protect><Login/></Protect>}></Route>
          <Route path="/Signup" element={<Protect><Signup/></Protect>}></Route>
          <Route path="/Home" element={<Protected><Home /></Protected>}></Route>
          <Route path="/home/Form" element={<Protected><Form /></Protected>} />
          <Route path="/resetpass" element={<Protected><Resetpass /></Protected>} />
          
          </Routes>
          </BrowserRouter>
      
    </div>
  );
}

export default App;
