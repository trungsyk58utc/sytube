import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [searchText, setSearchText] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
  };

  return (
    <div className="home container">
      <form className="form-control" onSubmit={handleSubmit}>
        <label className="form-label">SyDT Tube</label>
        <input
          id="inputPassword5"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          placeholder="Type here to search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary mt-2"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default HomePage;
