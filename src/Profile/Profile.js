import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Blog from "../blogger-logo-icon-png-10157.png";
import Chat from "../facebook-messenger-logo-png-44109.png";
import Vid from "../video-icon-8038.png";
import Cam from "../cam.svg";
import Audio from "../sound-png-35796.png";
import CommentIcon from "@mui/icons-material/Comment";
import "./Profile.css";
import ShareIcon from "@mui/icons-material/Share";
import "bootstrap/dist/css/bootstrap.min.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AiOutlineHeart } from "react-icons/ai";
import LikeCounter from "../LikeCounter/LikeCounter";
import Share from "../Share/Share";

export default function Profile() {
  // console.log("hi");
  const [like, setLike] = useState(0);

  // function Counter() {

  //   return <div></div>;
  // }

  return (
    <div style={{ backgroundColor: "#104892", height: "1000px" }}>
      <Header className="header" />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div
              style={{
                marginLeft: "30%",
                marginTop: "30px",
                backgroundColor: "white",
                width: "570px",
                height: "130px",
                borderRadius: "10px",
                boxShadow: "inherit",
              }}
            >
              {/* <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Cam}
                    alt="cam"
                    style={{
                      marginLeft: "20px",
                      width: "80px",
                      color: "white",
                      marginRight: "10px",
                      marginTop: "30px",
                      height: "80px",
                    }}
                  />
                  <span
                    style={{ marginLeft: "20px", marginRight: "13px" }}
                    className="caption"
                  >
                    Camera
                  </span>
                </div>
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Vid}
                    alt="video"
                    style={{
                      color: "white",
                      height: "80px",
                      marginRight: "10px",
                      width: "80px",
                      marginTop: "30px",
                    }}
                  />
                  <span style={{ marginRight: "13px" }} className="caption">
                    Videos
                  </span>
                </div>
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Audio}
                    alt="video"
                    style={{
                      color: "white",
                      height: "70px",
                      width: "70px",
                      marginRight: "",
                      marginTop: "30px",
                    }}
                  />
                  <span
                    style={{ marginRight: "", marginTop: "9px" }}
                    className="caption"
                  >
                    Audio
                  </span>
                </div>
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Blog}
                    alt="video"
                    style={{
                      color: "white",
                      height: "85px",
                      width: "100px",
                      marginRight: "10px",
                      marginTop: "30px",
                    }}
                  />
                  <span style={{ marginRight: "13px" }} className="caption">
                    Blog
                  </span>
                </div>
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Chat}
                    alt="video"
                    style={{
                      color: "white",
                      height: "80px",
                      width: "90px",
                      marginRight: "10px",
                      marginTop: "30px",
                    }}
                  />
                  <span style={{ marginRight: "13px" }} className="caption">
                    Chat
                  </span>
                </div> */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "1px",
                }}
              >
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Cam}
                    alt="cam"
                    style={{
                      marginLeft: "20px",
                      width: "50px",
                      color: "white",
                      marginRight: "10px",
                      marginTop: "7px",
                      height: "72px",
                    }}
                  />
                  <span
                    style={{ marginLeft: "20px", marginRight: "13px" }}
                    className="caption"
                  >
                    Camera
                  </span>
                </div>
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Vid}
                    alt="video"
                    // onClick={handleShow}
                    style={{
                      color: "white",
                      height: "62px",
                      marginRight: "10px",
                      width: "50px",
                      marginTop: "15px",
                    }}
                  />
                  <span style={{ marginRight: "13px" }} className="caption">
                    Videos
                  </span>
                </div>
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Audio}
                    alt="video"
                    style={{
                      color: "white",
                      height: "52px",
                      width: "52px",
                      marginRight: "",
                      marginTop: "18px",
                    }}
                  />
                  <span
                    style={{ marginRight: "", marginTop: "9px" }}
                    className="caption"
                  >
                    Audio
                  </span>
                </div>
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Blog}
                    alt="video"
                    style={{
                      color: "white",
                      height: "75px",
                      width: "80px",
                      marginRight: "10px",
                      marginTop: "6px",
                    }}
                  />
                  <span style={{ marginRight: "13px" }} className="caption">
                    Blog
                  </span>
                </div>
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Chat}
                    alt="video"
                    style={{
                      color: "white",
                      height: "65px",
                      width: "65px",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span style={{ marginRight: "13px" }} className="caption">
                    Chat
                  </span>
                </div>
              </div>
            </div>

            {/* card contant */}
            <div className="card-container">
              <img
                className="profile-image"
                title="karthi"
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                style={{ marginTop: "20px", marginRight: "10px" }}
                alt="sg"
              />

              <Card className="card" sx={{ maxWidth: 450 }}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Karthi"
                />

                <CardContent>
                  <img
                    src="https://www.lib.cam.ac.uk/files/styles/leading/public/idiscoverbanner.jpg?itok=JT5d80V0"
                    style={{ minWidth: "350px", minHeight: "300px" }}
                    alt="new"
                  />

                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <LikeCounter
                        onClick={() => {
                          setLike(like + 1);
                          console.log(like);
                        }}
                      />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                  <Typography variant="body2" color="text.secondary">
                    #Home
                  </Typography>
                </CardContent>
              </Card>
            </div>

            {/* 
            <div
              style={{
                marginLeft: "18.5%",
                marginTop: "30px",
                width: "500px",
                minHeight: "150px",
                borderRadius: "10px",
                boxShadow: "inherit",
                display: "flex",
              }}
            >
              <img
                title="karthi"
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                style={{ marginTop: "20px", marginRight: "10px" }}
                alt="sg"
              />

              <div
                style={{
                  marginTop: "30px",
                  backgroundColor: "white",
                  width: "500px",
                  minHeight: "150px",
                  borderRadius: "10px",
                  boxShadow: "inherit",
                }}
              >
                <div
                  style={{
                    height: "30px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                  }}
                >
                  <p style={{ marginLeft: "10px" }}>
                    Karthi{" "}
                    <span
                      style={{
                        color: "blue",
                        fontSize: "15px",
                        marginLeft: "10px",
                      }}
                    >
                      Follow
                    </span>
                    <button
                      style={{
                        float: "right",
                        backgroundColor: "white",
                        border: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                        marginRight: "10px",
                      }}
                    >
                      ...
                    </button>
                  </p>
                </div>
                <img
                  src="https://thumbs.dreamstime.com/b/conceptual-image-family-love-togetherness-safety-top-view-four-placing-hands-one-other-178302995.jpg"
                  style={{ minWidth: "500px", minHeight: "300px" }}
                  alt="new"
                />
                <div
                  style={{
                    height: "30px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                  }}
                >
                  <FavoriteBorderIcon
                    style={{
                      float: "left",
                      marginRight: "20px",
                      marginLeft: "20px",
                    }}
                  />
                  <CommentIcon style={{ float: "left", marginRight: "20px" }} />
                  <ShareIcon style={{ float: "left", marginRight: "20px" }} />
                </div>
                <p style={{ marginLeft: "10px" }}>#Home</p>
              </div>
            </div> */}
          </div>

          {/* <div
            className="col-3"
            style={{
              marginTop: "30px",
              backgroundColor: "white",
              width: "300px",
              height: "500px",
              borderRadius: "10px",
              boxShadow: "inherit",
            }}
          >
            <p style={{ marginTop: "10px" }}>
              Karthi{" "}
              <span style={{ float: "right", marginRight: "10px" }}>
                Joined Today
              </span>
            </p>
            <p className="para" style={{ marginTOp: "10px" }}>
              Posts:{" "}
              <span style={{ float: "right", marginRight: "10px" }}>1</span>
            </p>
            <p className="para" style={{ marginTOp: "10px" }}>
              Followers:{" "}
              <span style={{ float: "right", marginRight: "10px" }}>1</span>
            </p>
            <p className="para" style={{ marginTOp: "10px" }}>
              Activity{" "}
              <span style={{ float: "right", marginRight: "10px" }}>____</span>
            </p>
            <p className="para" style={{ marginTOp: "10px" }}>
              Draft:{" "}
              <span style={{ float: "right", marginRight: "10px" }}>1</span>
            </p>
            <p className="para" style={{ marginTOp: "10px" }}>
              Queue:{" "}
              <span style={{ float: "right", marginRight: "10px" }}>1</span>
            </p>
            <p className="para" style={{ marginTOp: "20px" }}>
              Edit Profile{" "}
              <span style={{ float: "right", marginRight: "10px" }}>+</span>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

// <Card>
// <CardHeader title="RajShankar" />
// <CardContent>
//   <img
//     src="https://thumbs.dreamstime.com/b/conceptual-image-family-love-togetherness-safety-top-view-four-placing-hands-one-other-178302995.jpg"
//     style={{ minWidth: "500px", minHeight: "300px" }}
//     alt="new"
//   />
// </CardContent>
// </Card>
