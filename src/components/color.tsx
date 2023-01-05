import React, { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import "./color.css";

export default function Color() {
  const [color, setColor] = useState("#aabbcc");
  return (
    <div>
      <section className="resposive example">
      <HexColorPicker color={color} className="resposive " onChange={setColor} />
      </section>
      <section style={{backgroundColor:color, fontWeight:600, padding:'1rem'}}>
      <label htmlFor="textclr" >Color Hex : #</label>
      <HexColorInput id="textclr" color={color} onChange={setColor} />
      </section>
    </div>
  );
};