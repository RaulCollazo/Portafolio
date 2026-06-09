import Navbar from "./components/Navbar";
import TypeWrite from "./components/typeWrite";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <span>
        <h1 className="titulo-desplazado titulo-arriba">RAUL</h1>
        <h1 className="titulo-desplazado">COLLAZO</h1>
        <TypeWrite />
      </span>
    </>
  );
}

export default App;
