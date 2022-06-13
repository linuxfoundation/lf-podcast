import React from "react";

export default function SoundcloudBox ({ scsrc }){
    return(
        <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={scsrc}
        ></iframe>
    );
}