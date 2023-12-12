
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";


import './App.css'

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>
   
    
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  
    </>
  );
}

export default App
