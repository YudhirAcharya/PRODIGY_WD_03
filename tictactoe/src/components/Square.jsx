import React, { useState } from "react";
import "./Square.css";
export default function Square({ value, onClick }) {
  return (
    <div>
      <button className="square" onClick={onClick}>
        {value}
      </button>
    </div>
  );
}
