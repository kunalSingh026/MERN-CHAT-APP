import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login";
import SignUp from './pages/signup/SignUp';
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  
  return (
    <div className="min-h-screen w-full bg-[#F4F3E6] text-black flex items-center justify-center p-2 sm:p-4 md:p-6 font-mono select-none">
      <div className="w-full max-w-7xl flex items-center justify-center">
        <Routes>
          <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
        </Routes>
      </div>

      <Toaster 
        toastOptions={{
          style: {
            background: '#FFD700',
            color: '#000000',
            border: '3px solid #000000',
            boxShadow: '4px 4px 0px #000000',
            fontFamily: 'Space Mono, monospace',
            fontWeight: 'bold',
            borderRadius: '0px'
          }
        }}
      />
    </div>
  );
}

export default App;