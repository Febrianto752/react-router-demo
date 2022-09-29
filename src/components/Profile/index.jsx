import { useAuth } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <h1>Profile Page</h1>
      {auth.user ? <p>Your name is : {auth.user}</p> : ""}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;
