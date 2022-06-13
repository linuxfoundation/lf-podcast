import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer ({ scsrc }){
    return(
        <ReactPlayer
        class="video-player"
        controls="false"
        url={scsrc}
        width="100%"
        height="80%"
        />
    );
}