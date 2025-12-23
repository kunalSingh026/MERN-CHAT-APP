import { Routes, Route, Navigate } from "react-router-dom"; // FIX: Added Navigate
import "./App.css"; 
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login";
import SignUp from './pages/signup/SignUp';
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext"; // FIX: Added import

function App() {
  const { authUser } = useAuthContext();
  
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} /> } />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp /> } />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;