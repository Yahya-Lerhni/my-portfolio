import React, { useEffect, useState } from "react";
import PathDrawing from "./PathDrawing"; 
import Home from "../Pages/Home";

export default function HomeWithIntro() {
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSite(true);
    }, 3500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
      {!showSite ? (
        <div className="flex justify-center items-center w-full h-screen">
          <PathDrawing />
        </div>
      ) : (
        <div className="fade-in">
          <Home />
        </div>
      )}
    </div>
  );
}
