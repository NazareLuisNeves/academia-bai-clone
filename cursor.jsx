import Cursor from "./components/Cursor";
import React, { useEffect, useState } from "react";
import "../App.css"; // mantém o estilo geral

function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        width: "25px",
        height: "25px",
        background: "rgba(0, 255, 255, 0.5)",
        border: "2px solid cyan",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        transition: "transform 0.15s ease-out, width 0.2s, height 0.2s",
        zIndex: 9999,
      }}
      className="cursor"
    ></div>
  );
  <Cursor />
}

export default Cursor;

