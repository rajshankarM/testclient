import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import CommentIcon from "@mui/icons-material/Comment";
import Blog from "../blogger-logo-icon-png-10157.png";
import Chat from "../facebook-messenger-logo-png-44109.png";
import Vid from "../video-icon-8038.png";
import Cam from "../cam.svg";
import ShareIcon from "@mui/icons-material/Share";
import { ImVideoCamera } from "react-icons/im";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Audio from "../sound-png-35796.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./Home.css";
import jwtDecode from "jwt-decode";
import GlobalSearch from "../Search/GlobalSearch";
import Navbar from "../Navbar/Navbar";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const User = localStorage.getItem("twittertoken");
export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [res, setRes] = useState([]);
  const [show, setShow] = useState(false);
  const [tags, setTags] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const navigate = useNavigate();
  useEffect(() => {
    if (!User) {
      // navigate("/");
    }

    axios.get("http://localhost:5000/get").then((res) => setRes(res.data));
  }, []);
  console.log("hi");

  const handleSubmit = async (event) => {
    const username = jwtDecode(User).username;
    const profile = jwtDecode(User).profile;
    event.preventDefault();
    console.log("value", tags);
    const formData = new FormData();
    formData.append("user", username);
    formData.append("profile", profile);
    formData.append("galleryImage", selectedFile);
    formData.append("tags", tags);

    try {
      await axios({
        method: "post",
        url: "http://localhost:5000/video",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => alert("Upload Successfull"));
    } catch (error) {
      alert(error);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  const handleTags = (event) => {
    setTags(event.target.value);
  };
  const handleSearch = (event) => {
    let data = res.filter((d) => d.tags.includes(event.target.value));
    console.log(data.length, "length");
    if (data.length > 0) {
      setRes(data);
    } else if (data.length === 0) {
      axios.get("http://localhost:5000/get").then((res) => setRes(res.data));
    }

    console.log(data);
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <div style={{ backgroundColor: "#393c70" }}>
      <Header />
      <div className="home">
        <Modal className="modal-background" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="title">Video Upload</Modal.Title>
          </Modal.Header>

          <form onSubmit={handleSubmit}>
            <Modal.Body>
              {/* <div>
                <button type="file" accept="video/*" onClick={handleFileSelect}>
                  <img
                    // type="file"
                    // accept="video/*"
                    // onChange={handleFileSelect}
                    src="https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-video-camera-icon-png-image_554033.jpg"
                    alt=""
                  />
                </button>
              </div> */}
              <Stack direction="row" alignItems="center" spacing={2}>
                {/* <label htmlFor="contained-button-file">
                  <Input
                    accept="video/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label> */}
                <label htmlFor="icon-button-file">
                  <Input
                    onChange={handleFileSelect}
                    accept="video/*"
                    id="icon-button-file"
                    type="file"
                  />
                  <IconButton
                    className="icon-button"
                    color="primary"
                    aria-label="upload video"
                    component="span"
                  >
                    <ImVideoCamera className="icon" />
                  </IconButton>
                  <p>Upload Video</p>
                </label>
              </Stack>
              {/* <button className="choose-file">
                <input
                  className="input-video"
                  type="file"
                  accept="video/*"
                  onChange={handleFileSelect}
                />
              </button> */}
              {/* <input type="submit" value="Upload File" /> */}

              <input
                className="modal-tag"
                type="string"
                placeholder="#add tags"
                onChange={handleTags}
                style={{ borderRadius: "6px", marginTop: "10px" }}
              />
            </Modal.Body>
            <Modal.Footer className="footer-button">
              <Button color="red" variant="secondary" onClick={handleClose}>
                {/* Close */}
                <AiOutlineArrowLeft />
              </Button>
              <Button type="submit" value="Upload File">
                post
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
        {/*   <GlobalSearch /> */}
        {/*       <input style={{marginLeft:"30%",width:"500px",height:"30px",marginTop:"20px",borderRadius:"8px"}} placeholder = "Search Tags" type = "text" onChange={handleSearch} /> */}
        <div
          style={{
            marginLeft: "30%",
            marginTop: "30px",
            padding: "5px",
            backgroundColor: "white",
            width: "570px",
            height: "130px",
            borderRadius: "10px",
            boxShadow: "inherit",
            // overflow: "hidden",
          }}
        >
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
                onClick={handleShow}
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
                  height: "55px",
                  width: "55px",
                  marginRight: "",
                  marginTop: "13px",
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

        {[...res].reverse().map((d) => (
          <div
            style={{
              marginLeft: "24.1%",
              marginTop: "30px",
              width: "500px",
              minHeight: "150px",
              borderRadius: "10px",
              boxShadow: "inherit",
              display: "flex",
            }}
          >
            <img
              src={d.profile}
              style={{
                marginTop: "30px",
                marginRight: "10px",
                marginLeft: "20px",
                height: "100px",
              }}
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
                marginBottom: "50px",
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
                  {d.username}{" "}
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
              <ReactPlayer url={d.video} controls width="500px" alt="new" />
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
              <p style={{ marginLeft: "10px" }}>{d.tags}</p>
            </div>
          </div>
        ))}
        {/*   <div style={{marginLeft:"24.1%",marginTop:"30px",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",display:"flex"}}>
         <img title="karthi" src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png' style={{marginTop:"20px",marginRight:"10px"}} alt='sg'/>
       <div style={{marginTop:"30px",backgroundColor:"white",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit"}}>
         <div style={{height:"30px",backgroundColor:"white",borderRadius:"12px"}}>
          <p style={{marginLeft:"10px"}}>Karthi <span style={{color:"blue",fontSize:"15px",marginLeft:"10px"}}>Follow</span><button style={{float:"right",backgroundColor:"white",border:'none',fontSize:"20px",cursor:"pointer",marginRight:"10px"}}>...</button></p>
          
          </div>
          <img src='https://thumbs.dreamstime.com/b/conceptual-image-family-love-togetherness-safety-top-view-four-placing-hands-one-other-178302995.jpg' style={{minWidth:"500px",minHeight:"300px"}} alt='new' />
          <div style={{height:"30px",backgroundColor:"white",borderRadius:"12px"}}>
          <FavoriteBorderIcon style={{float:"left",marginRight:"20px",marginLeft:"20px"}} />
          <CommentIcon style={{float:"left",marginRight:"20px"}} />
          <ShareIcon style={{float:"left",marginRight:"20px"}}/>
          </div>
          <p style={{marginLeft:"10px"}}>#Home</p>
          </div>

          </div> */}

        {/* 
          <div style={{marginLeft:"24.1%",marginTop:"30px",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",display:"flex"}}>
          <img title="karthi" src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png' style={{marginTop:"20px",marginRight:"10px"}} alt='sg'/>
          <div style={{marginTop:"30px",backgroundColor:"white",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",marginBottom:"50px"}}>
         <div style={{height:"30px",backgroundColor:"white",borderRadius:"12px"}}>
          <p style={{marginLeft:"10px"}}>Karthi <span style={{color:"blue",fontSize:"15px",marginLeft:"10px"}}>Follow</span><button style={{float:"right",backgroundColor:"white",border:'none',fontSize:"20px",cursor:"pointer",marginRight:"10px"}}>...</button></p>
          
          </div>
          <ReactPlayer url='https://karthiknbucket1.s3.ap-southeast-1.amazonaws.com/uploads/93d0aeef-addb-4d1f-b41a-04112812495f-Java+for+the+Haters+in+100+Seconds.mp4' controls width='500px'  alt='new' />
          <div style={{height:"30px",backgroundColor:"white",borderRadius:"12px"}}>
          <FavoriteBorderIcon style={{float:"left",marginRight:"20px",marginLeft:"20px"}} />
          <CommentIcon style={{float:"left",marginRight:"20px"}} />
          <ShareIcon style={{float:"left",marginRight:"20px"}}/>
          </div>
          <p style={{marginLeft:"10px"}}>#React #Learning</p>
          </div>
          </div>

          <div style={{marginLeft:"24.1%",marginTop:"30px",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",display:"flex"}}>
          <img title="karthi" src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png' style={{marginTop:"20px",marginRight:"10px"}} alt='sg'/>
          <div style={{marginTop:"30px",backgroundColor:"white",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",marginBottom:"50px"}}>
         <div style={{height:"30px",backgroundColor:"white",borderRadius:"12px"}}>
          <p style={{marginLeft:"10px"}}>Karthi <span style={{color:"blue",fontSize:"15px",marginLeft:"10px"}}>Follow</span><button style={{float:"right",backgroundColor:"white",border:'none',fontSize:"20px",cursor:"pointer",marginRight:"10px"}}>...</button></p>
          
          </div>
          <div style={{marginLeft:"10px",backgroundColor:"white",width:"480px",borderRadius:"12px",marginRight:"20px"}}>
            <p style={{marginLeft:"10px"}}>Hello all, this is iDiscovers blog posting page where we can post whatever we thought that is useful to the society </p>
            </div>
          <div style={{height:"30px",backgroundColor:"white",borderRadius:"12px"}}>
          <FavoriteBorderIcon style={{float:"left",marginRight:"20px",marginLeft:"20px"}} />
          <CommentIcon style={{float:"left",marginRight:"20px"}} />
          <ShareIcon style={{float:"left",marginRight:"20px"}}/>
          </div>
          <p style={{marginLeft:"10px"}}>#Blog #Post</p>
          </div>
        </div>
        <div style={{marginLeft:"24.1%",marginTop:"30px",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",display:"flex"}}>
          <img title="karthi" src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png' style={{marginTop:"20px",marginRight:"10px"}} alt='sg'/>
          <div style={{marginTop:"30px",backgroundColor:"white",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",marginBottom:"50px"}}>
         <div style={{height:"30px",backgroundColor:"white",borderRadius:"12px"}}>
          <p style={{marginLeft:"10px"}}>Karthi <span style={{color:"blue",fontSize:"15px",marginLeft:"10px"}}>Follow</span><button style={{float:"right",backgroundColor:"white",border:'none',fontSize:"20px",cursor:"pointer",marginRight:"10px"}}>...</button></p>
          
          </div>
          <p style={{marginLeft:"20px"}}>Demo Podcast</p>
          <ReactAudioPlayer src='https://dcs.megaphone.fm/LEW2005029794.mp3'
  controls style={{marginLeft:"20px",width:"450px",marginRight:"20px"}} />
          <div style={{height:"30px",backgroundColor:"white",borderRadius:"12px"}}>
          <FavoriteBorderIcon style={{float:"left",marginRight:"20px",marginLeft:"20px"}} />
          <CommentIcon style={{float:"left",marginRight:"20px"}} />
          <ShareIcon style={{float:"left",marginRight:"20px"}}/>
          </div>
          <p style={{marginLeft:"10px",marginBottom:"10px"}}>#Podcast #Learning</p>
          </div>
          </div> */}
        {/*           <iframe src='https://karthiknbucket1.s3.ap-southeast-1.amazonaws.com/Java+for+the+Haters+in+100+Seconds.mp4' width='300' height='300' title='vid'></iframe> */}
      </div>
    </div>
  );
}
