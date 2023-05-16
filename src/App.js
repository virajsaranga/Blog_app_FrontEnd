import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Loginn from "./pages/Loginn";
import SignUPP from "./pages/SignUPP";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Profile from "./pages/profile";
import AboutUs from "./pages/AboutUs";
import Addblogs from "./pages/Addblogs";
import ViewBlogs from "./pages/viewBlog";
import UpdateBlog from "./pages/UpdateBlog";







function App() {
  return (
    <BrowserRouter>
    
    <Header/>
      <Routes>
        <Route path="/" exact element={<Loginn />} />
        <Route path="/Loginn"  element={<Loginn />} />
        <Route path="/SignUPP" element={<SignUPP />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Addblogs" element={<Addblogs/>} />
        <Route path="/ViewBlogs/:id" element={<ViewBlogs/>} />
        <Route path="/UpdateBlog/:id" element={<UpdateBlog/>} />
        
  
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

