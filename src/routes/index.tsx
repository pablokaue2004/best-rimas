import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wellcome from "../pages/Wellcome/Wellcome";
import Main from "../pages/Main";
import Layout from "../components/Layout";
import AllBatles from "../pages/AllBattles";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wellcome />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/home/allbattles" element={<AllBatles />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
