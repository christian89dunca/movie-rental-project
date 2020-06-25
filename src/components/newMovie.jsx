import React from "react";
import { Link } from "react-router-dom";

const NewMovie = () => {
  return (
    <ul className="list-group">
      <Link
        to="/movies/new"
        style={{ marginTop: 50, textAlign: "center" }}
        className="list-group-item active clickable"
      >
        ADD NEW MOVIE
      </Link>
    </ul>
  );
};

export default NewMovie;
