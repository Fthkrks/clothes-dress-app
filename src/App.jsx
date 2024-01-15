/* eslint-disable no-unused-vars */
import Dress from "./Dress";
import "./App.css";
import { useState } from "react";


function App() {

  const [color, setColor] = useState("#00D9FA");
  const [text, setText] = useState("");
  const [textSize, setTextSize] = useState(16);
  const [fontType, setFontType] = useState("");

  const handleColor = (e) =>{
    setColor(e.target.value)
  }

  const handleText = (e) =>{
    setText(e.target.value)
  }

  const handleTextSize = (e) =>{
    setTextSize(e.target.value)
  }

  const handleFontType = (e) =>{
    setFontType(e.target.value)
  }

  return (
    <div className='app'>
      <div style={{display: "flex", alignItems: "center", flexDirection: "column", gap: "50px"}}>
      <Dress color={color} text={text} textSize={textSize} fontType={fontType} className="logo react" alt="React logo" />


      <div className="colors-wrapper" style={{display: "flex", gap: "10px"}}>
        <div className="color-wrapper">
          <label className="color-red" style={{backgroundColor: "red"}}>
            <input type="radio" name="product-name" value= "red" onChange={handleColor} />
          </label>
        </div>
        <div className="color-wrapper">
          <label className="color-yellow" style={{backgroundColor: "yellow"}}>
            <input type="radio" name="product-name" value = "yellow" onChange={handleColor} />
          </label>
        </div>
        <div className="color-wrapper">
          <label className="color-green" style={{backgroundColor: "green"}}>
            <input type="radio" name="product-name" value="green" onChange={handleColor} />
          </label>
        </div>
      </div>
      <div className="inputs" style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px"}}>
        <label>
          <span style={{color: "white", fontSize: "15px", marginRight: "10px" }}>Metin alanı</span>
          <input type="text" placeholder="Bir metin giriniz" onChange={handleText}/>
        </label>
        <label>
          <span style={{color: "white", fontSize: "15px", marginRight: "10px" }}>Metin Büyüklüğü</span>
          <input type="number" placeholder="Metin büyüklüğünü giriniz" onChange={handleTextSize}/>
        </label>
        <label>
          <span style={{color: "white", fontSize: "15px", marginRight: "10px" }}>Metin Tipi</span>
          <input type="text" placeholder="Metin tipini giriniz" onChange={handleFontType}/>
        </label>
      </div>
      </div>

    </div>
  );
}

export default App;
