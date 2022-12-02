//on fait une div blanche au dessus du background

import React from "react";
import Background from "./Background";

const AllBackground = ({ children }) => {
    const divcentrale = {
        position: "relative",
        zIndex: 1,
        width: "50%", 
        margin: "auto",
        height: "100%", 
        background:'linear-gradient(to right, rgba(255,255,255,0), white 10%, white 90%, rgba(255,255,255,0))',
        padding: "10px 180px",
        minHeight: "calc(100vh - 20px)",
      }
    return (
        <>
        <div style={divcentrale}>
            {children}
        </div>
        <Background />
        </>

    );
    };

export default AllBackground;