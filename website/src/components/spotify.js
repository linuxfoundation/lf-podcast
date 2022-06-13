import React from "react";

export default function Spotify ({ scsrc }){
    return(
        <iframe
        width="100%" 
        height="232" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        src={scsrc}
        ></iframe>
    );
}