import "./App.css";

import "./index.css";

import HomeImg from "./assets/Images/Home/HomeImg.jpeg";
import ImageDescription from "./assets/Images/Home/ImageDescription.jpeg";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="main--image">
        <img src={HomeImg} alt="Home--Main--Image" />
      </div>

      <div className="image--with--description">
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Faucibus quis imperdiet orci
          at nam diam consectetur odio potenti. Tristique gravida et ut maecenas
          nisl non aliquet velit turpis.
        </p>
        <img src={ImageDescription} alt="Image--description" />
        <p className="bold--text mofia">I'm SARANG JIN</p>
      </div>

      <div className="didgeridoo--player">
        <p className="mofia">
          “I am a Didgeridoo player and a medical music therapist who helps
          patients in hospitals using the Didgeridoo.”
        </p>
      </div>

      <Footer />
    </>
  );
}

export default App;
