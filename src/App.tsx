import { Route, Routes } from "react-router-dom";
import "./index.scss";
import Layout from "./Components/Layout/Layout";
import SIgnup from "./Pages/CTA/SIgnup";
import Login from "./Pages/CTA/Login";
import { useState } from "react";
import { AppContext } from "./hooks/ContextApi";
import Guest from "./Pages/Guest/Guest";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [asGuest, setAsGuest] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div>
      <AppContext.Provider
        value={{
          asGuest,
          setAsGuest,
          loggedIn,
          setLoggedIn,
          isOnline,
          setIsOnline,
        }}
      >

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SIgnup />} />
          <Route path="/" element={<Layout />} />
          <Route path="/guest" element={<Guest />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
