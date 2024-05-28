import React, { useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom"; // Import routing components
import Navbar from './components/Navbar/Navbar'; // Import Navbar component
import Sidebar from './Sidebar'; // Import Sidebar component
import Home from "./Pages/Home"; // Import pages
import Templates from "./Pages/Templates";
import Mypapers from "./Pages/Mypapers";
import styled from "styled-components";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const [theme, setTheme] = useState('light'); // State for theme (optional)
  const location = useLocation();

  return (
    <div className={`container ${theme}`}>  {/* Wrap in container (optional) */}
      <Navbar theme={theme} setTheme={setTheme} /> {/* Render Navbar */}
      <div className="app-layout">  {/* Layout container for better organization */}
        <Sidebar /> {/* Render Sidebar */}
        <Pages>
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Home />} />
              <Route path="/Templates" element={<Templates />} />
              <Route path="/Mypapers" element={<Mypapers />} />
              {/* Add more routes as needed */}
            </Routes>
        </Pages>
      </div>
    </div>
  );
}

export default App;
