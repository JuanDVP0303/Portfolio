import propTypes from "prop-types"
// import { useEffect, useState } from "react";
export function MouseFollower({newPositionX, newPositionY}){
    // const [position, setPosition] = useState({ x: 0, y: 0 });

    // useEffect(() => {
    //   const handleMove = (event) => {
    //     const { x, y } = event;
    //     setPosition({ x: x, y: y });
    //   };
  
    //     window.addEventListener("mousemove", handleMove);
  
      
    // }, []);
    
    return <div
    id="mouse-follow"
      style={{
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        backgroundImage: "linear-gradient(red, blue, green)",
        position: "absolute",
        top: "20px",
        opacity: "0.1",
        pointerEvents:"none",
        left: "20px",
        filter: "blur(50px)",
        transform: `translate(${newPositionX - 40}px, ${newPositionY - 80}px)`,
      }}
    ></div>
}

MouseFollower.propTypes = {
  newPositionX: propTypes.number,
  newPositionY: propTypes.number
}