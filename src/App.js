import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Service from "./components/Service";
import Customer from "./components/Customer";
import Team from "./components/Team";
import Contact from "./components/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className="h-[88vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/service" element={<Service />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
