import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Trailer.css";
import Header from "../header/Header";

const Trailer = () => {
  const { ytTrailerId } = useParams();
  return (
    <>
      <div className="react-player-container">
        {ytTrailerId.length > 0 ? (
          <ReactPlayer
            controls
            playing
            url={`https://www.youtube.com/watch?v=${ytTrailerId}`}
            width="100%"
            height="100%"
          />
        ) : (
          <p>No trailer available</p>
        )}
        {/* Hi everyone , this is the trailer link id - {key} */}
      </div>
    </>
  );
};

export default Trailer;
