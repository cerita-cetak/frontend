"use client";

import React from "react";
import { FaMusic } from "react-icons/fa";

export default function Music() {
  return (
    <div
      className="absolute bottom-10 left-10 bg-white p-2 rounded-full aspect-square animate-spin"
      title="click to detail music"
    >
      <i className="text-black text-2xl">
        <FaMusic />
      </i>
      <audio
        src="/music/sample-music.mp3"
        autoPlay
        onPause={(p) => console.log("pause")}
      ></audio>
    </div>
  );
}
