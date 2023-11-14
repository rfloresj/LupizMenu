import "./App.css";
import borderLupis from "./images/Border_Lupis.png";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <img id="main-border" src={borderLupis} alt="border" />
      <Header />
    </>
  );
}

export default App;
