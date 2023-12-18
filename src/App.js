import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/authContext";
import Navbar from './components/Navbar'
import BarRed from './components/BarRed'
import Index from "./components/Index";
import Products from "./components/Products";


function App() {
  
  return (
    <div className="Navbar">
      <BarRed/>

      <AuthProvider>


        <BrowserRouter>
<Navbar/>
        
        <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Products" element={<Products/>}/>

          <Route path="/login" element={<Login />} />
          <Route
            path="/Home"
            element={
              <ProtectedRoute>
            
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
        </BrowserRouter>


      </AuthProvider>
      
    </div>
  );
}

export default App;
