import React from "react";
import { NavLink } from "react-router-dom";
//import iDiscover from '../idiscover.jpg'
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
//import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from "@mui/icons-material/Person";
//import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const User = localStorage.getItem("twittertoken");
const Header = ({ history, isLogged }) => {
  const [tags, setTags] = useState("");
  const handleClick = () => {
    history.push("/");
    isLogged(false);
  };
  const navigate = useNavigate();
  function Search(e) {
    navigate(`/tags/${tags}`);
  }
  const handleTags = (event) => {
    setTags(event.target.value);
  };
  function Logout(e) {
    localStorage.removeItem("twittertoken");
    navigate("/");
  }

  return (
    <div className="div-header">
      <AppBar position="static">
        <Toolbar variant="dense">
          <div
            className=""
            style={{ display: "flex" }}
            onClick={() => history.push("/")}
          >
            <h3>
              {/* <span>I</span>
              <span>D</span>
              <span>o</span>
              <span>s</span>
              <span>c</span>
              <span>o</span>
              <span>v</span>
              <span>e</span>
              <span>r</span> */}
              IDiscover
            </h3>
            <form onSubmit={Search}>
              {/* <TextField
                onChange={handleTags}
                className="search"
                label="Search Tags"
                variant="standard"
              /> */}
              <input
                onChange={handleTags}
                style={{
                  width: "300px",
                  height: "30px",
                  marginTop: "4px",
                  marginLeft: "80px",
                  borderRadius: "5px",
                }}
                placeholder="Search Tags"
                type="text"
              />
            </form>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <NavLink
              exact
              to="/home"
              activeclassname="active"
              style={{ marginRight: "20px" }}
            >
              <HomeIcon style={{ color: "white" }} />
            </NavLink>
            <NavLink
              exact
              to="/trending"
              activeclassname="active"
              style={{ marginRight: "20px" }}
            >
              <WhatshotIcon style={{ color: "white" }} />
            </NavLink>
            <NavLink
              exact
              to="/profile"
              activeclassname="active"
              style={{ marginRight: "20px" }}
            >
              <PersonIcon style={{ color: "white" }} />
            </NavLink>
            {User && (
              <button className="logoutbutton" onClick={Logout}>
                Logout
              </button>
            )}
            {!User && (
              // <button className="button" onClick={handleClick}>
              //   Login
              // </button>
              <Button onClick={handleClick} variant="contained" color="primary">
                Login
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
