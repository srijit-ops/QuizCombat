import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Player
        src="https://lottie.host/83313cd9-7c35-42c7-8583-cf4c05a29566/2X2ul9NFam.json"
        className="player"
        loop
        autoplay
        style={{ height: "250px", width: "250px" }}
      />
    </div>
  );
}

export default Loader;