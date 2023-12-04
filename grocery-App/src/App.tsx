
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterForm from "./components/RegisterForm";

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>Grocery App</div>
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<RegisterForm />} />
    </Routes>
  
    </>
  );
}

export default App
