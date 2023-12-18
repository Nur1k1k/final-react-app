import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";

import React, { Component, useEffect, useState } from "react";

const App = () => {
  return (
    <>
      <Navbar data={data} />
      <Routes>
       
      </Routes>
    </>
  );
};

export default App;
