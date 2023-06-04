import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Text, Box } from "@chakra-ui/react";
import { Home, Contact } from "./pages/index.js";
import { Footer, Navbar } from "./components";
import Layout from "./components/Layout/Layout.jsx";
import PropertyDetail from "./pages/PropertyDetail/PropertyDetail.jsx";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/departamento/:key" element={<PropertyDetail />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
