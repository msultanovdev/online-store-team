import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const limit: string | null = searchParams.get("limit");
  navigate({ pathname: "/NotFound", search: `?limit=${limit}` });
  return (
    <div className="not__found-page">
      <div className="not__found-content">
        <h1>404 Not Found</h1>
        <p>
          Oh no! It looks like the page you are trying to get to is missing!
        </p>
      </div>
    </div>
  );
};

export default NotFound;
