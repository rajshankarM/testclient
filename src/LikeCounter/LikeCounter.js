import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import "./likecounter.css";

const LikeCounter = () => {
  // const [like, setLike] = useState(0);
  //   const [dislike, setDislike] = useState(0);
  return (
    <div
      style={{
        margin: "auto",
        display: "block",
        width: "fit-content",
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            icon={<AiOutlineHeart />}
            checkedIcon={<AiFillHeart />}
            name="checkedH"
          />
        }
      />
    </div>
  );
};

export default LikeCounter;
