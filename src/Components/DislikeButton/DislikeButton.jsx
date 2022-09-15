import { useState } from "react";



const DislikeButton = (props) => {

  const [Dislike, setDisliked] = useState("inactive");

  function dislikeClick(){
   if(Dislike === "inactive"){
    setDisliked("active");
   }
   else{
    setDisliked("inactive");
   } 
  }
  return (

    <div>
        <button className={Dislike} onClick={dislikeClick}>{props.thumbsDown}</button>
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

export default DislikeButton;