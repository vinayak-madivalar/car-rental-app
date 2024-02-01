import { Link, useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <Header />
      <div
        style={{ display: "grid", placeItems: "center", marginBottom: "5rem" }}
      >
        <h1 style={{ fontSize: "8rem" }}>Oops</h1>
        <p style={{ fontSize: "3rem" }}>
          {err.status}: {err.statusText}
        </p>
        <Link to={"/"}>
          <button
            style={{
              marginTop: "2rem",
              padding: "1rem 4rem",
              fontSize: "1.2rem",
              border: 0,
              borderRadius: "2rem",
              backgroundColor: "orangered",
              color: "white",
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
