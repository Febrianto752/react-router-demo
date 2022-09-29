import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Home,
  // About,
  // Products,
  // FoodList,
  // SportList,
  // UserList,
  // UserDetail,
  // Admin,
  Error,
  Profile,
  Login,
  RequireLogin,
} from "./components";

// const LazyAbout = React.lazy(() => import("./components/About"));

import { AuthProvider } from "./components/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="profile"
            element={
              <RequireLogin>
                <Profile />
              </RequireLogin>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
