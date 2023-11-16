import "./App.css";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";

function App() {
  return (
    <>
      <Navbar title="TextConverter" about="About " />
      {/* <Navbar/> */}
      <div className="container">
      <Textbox heading="Enter your text here"/>
      </div>
      
    </>
  );
}

export default App;
