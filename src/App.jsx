import "./App.css";
import lupisLogo from "./images/Lupis.png";
import borderLupis from "./images/Border_Lupis.png";

function App() {
  return (
    <>
      <img id="main-border" src={borderLupis} alt="border" />
      <header>
        <div className="lupis-container">
          <img className="lupis-logo" src={lupisLogo} alt="lupis-logo" />
        </div>
      </header>
    </>
  );
}

export default App;
