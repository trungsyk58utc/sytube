import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/autotube.png";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = React.useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
  };

  return (
    <div className="row">
      <div className="col-3">
        <img
          src={logo}
          onClick={() => navigate("/home")}
          alt="logo"
          className="logo-img"
        />
      </div>
      <div className="col-7">
        <form className="d-flex mt-2">
          <input
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            placeholder="Nhập để tìm kiếm..."
            style={{ height: "45px", width: "70%" }}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-light ms-2"
            style={{ height: "45px" }}
            onClick={handleSubmit}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
