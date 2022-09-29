import { useState, useEffect } from "react";
import { useAuth } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate("/profile");
  };

  useEffect(() => {}, []);
  return (
    <>
      <label htmlFor="username">
        Username :{" "}
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
      </label>

      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
