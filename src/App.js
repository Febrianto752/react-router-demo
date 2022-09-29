import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Home,
  // About,
  Products,
  FoodList,
  SportList,
  UserList,
  UserDetail,
  Admin,
  Error,
} from "./components";

import React from "react";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="products" element={<Products />}>
          <Route index element={<FoodList />} />
          <Route path="foods" element={<FoodList />} />
          <Route path="sports" element={<SportList />} />
        </Route>

        <Route path="users" element={<UserList />}>
          <Route path=":userId" element={<UserDetail />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
