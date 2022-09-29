import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>Products Page</h1>
      <p>
        Category : <Link to={"/products/foods"}>food list</Link> |{" "}
        <Link to={"/products/sports"}>sport list</Link>
      </p>

      <Outlet />
    </>
  );
};

export default Products;
