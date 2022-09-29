import { useSearchParams } from "react-router-dom";

const Admin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <h1>Admin Page</h1>
      <button onClick={() => setSearchParams({ name: "febrianto" })}>
        Set Search Parms
      </button>
      <button onClick={() => setSearchParams({})}>Reset Search Params</button>

      {searchParams.get("name") ? (
        <p>Admin is {searchParams.get("name")}</p>
      ) : (
        ""
      )}
    </>
  );
};

export default Admin;
