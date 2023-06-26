import memesData from "../memesData";
import { useState } from "react";

export function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  }

  return (
    <main className="main">
      <div className="main__form-container">
        <input className="main__form main__form-text" type="text" placeholder="Top text" />
        <input className="main__form main__form-text" type="text" placeholder="Bottom text" />
        <button onClick={getMemeImage} className="main__form main__form-button">
          Get a new meme image 🖼
        </button>
      </div>
      <img className="main__memeImg" src={memeImage} alt="Meme Image" />
    </main>
  );
}
