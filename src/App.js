import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Home,
  About,
  Products,
  FoodList,
  SportList,
  UserList,
  UserDetail,
  Admin,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FoodList />} />
          <Route path="foods" element={<FoodList />} />
          <Route path="sports" element={<SportList />} />
        </Route>

        <Route path="users" element={<UserList />}>
          <Route path=":userId" element={<UserDetail />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
