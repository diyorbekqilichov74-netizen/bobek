import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Guides from "./pages/Guides";
import GuideDetails from "./pages/GuideDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />

        <Route
          path="/hotels"
          element={
            <Hotels
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />

        <Route path="/hotels/:id" element={<HotelDetails />} />

        <Route path="/guides" element={<Guides />} />

        <Route path="/guides/:id" element={<GuideDetails />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/booking/:type/:id"
          element={<Booking />}
        />

        <Route path="/payment" element={<Payment />} />

        <Route path="/success" element={<Success />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;