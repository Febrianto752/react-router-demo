import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import FoodList from "./components/FoodList";
import SportList from "./components/SportList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
          <Route path="foods" element={<FoodList />} />
          <Route path="sports" element={<SportList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
