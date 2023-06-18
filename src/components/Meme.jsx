export function Meme() {
  return (
    <main className="main">
      <form className="main__form-container">
        <input className="main__form main__form-text" type="text" placeholder="Top text" />
        <input className="main__form main__form-text" type="text" placeholder="Bottom text" />
        <button className="main__form main__form-button">Get a new form image 🖼</button>
      </form>
    </main>
  );
}
