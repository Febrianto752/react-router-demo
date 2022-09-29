import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  return (
    <>
      <h1>Halaman Home</h1>
      {location.state?.message ? (
        <p style={{ color: "red" }}>
          Before access profile page {location.state.message}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
