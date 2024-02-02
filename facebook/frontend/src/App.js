import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import LoggedinRoutes from "./routes/LoggedinRoutes";
import NoyLoggedinRoutes from "./routes/NoyLoggedinRoutes";
function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/" element={<Home />} exact />
        
     
        <Route path="/login" element={<Login />} exact />
      
      </Routes>
    </div>
  );
}

export default App;
