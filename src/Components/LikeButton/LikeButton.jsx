import { useState } from "react";
import "./LikeButton.css";


const LikeButton = (props) => {

  const [liked, setLiked] = useState("inactive");

  function likeClick(){
   if(liked === "inactive"){
    setLiked("active");
   }
   else{
    setLiked("inactive");
   } 
  }
  return (

    <div>
        <button className={liked} onClick={likeClick}>{props.thumbsUp}</button>
    </div>

    // <button
    //   onClick={() => setLiked(!liked)}
    //   onAnimationEnd={() => setClicked(false)}
    //   className={cn("like-button-wrapper", {
    //     liked,
    //   })}
    // >
    //   <div className="like-button">
    //     <Hand />
    //     <span>Like</span>
    //   </div>
    // </button>
  );
};

export default LikeButton;