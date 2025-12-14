"use client";
import React from "react";

export default function ScrollButton({ targetId, children }) {
  return (
    <button
      className="btn btn-accent btn-lg rounded-full"
      onClick={() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </button>
  );
}
