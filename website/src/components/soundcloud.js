import React from "react";

export default function Soundcloud ({ scsrc }){
    return(
        <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={scsrc}
        ></iframe>
    );
}