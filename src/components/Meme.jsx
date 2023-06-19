import memesData from "../memesData";

export function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    // console.log(randomNumber);
    console.log(url);
  }

  return (
    <main className="main">
      <div className="main__form-container">
        <input className="main__form main__form-text" type="text" placeholder="Top text" />
        <input className="main__form main__form-text" type="text" placeholder="Bottom text" />
        <button onClick={getMemeImage} className="main__form main__form-button">
          Get a new form image 🖼
        </button>
      </div>
    </main>
  );
}
