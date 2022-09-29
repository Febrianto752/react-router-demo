import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

const RequireLogin = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to={"/"} state={{ message: "you must login first" }} />;
  }

  return children;
};

export default RequireLogin;
