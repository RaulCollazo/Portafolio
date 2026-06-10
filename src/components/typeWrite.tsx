// src/components/TypeWrite.tsx
import { TypeAnimation } from "react-type-animation";

const TypeWrite = () => {
  return (
    <>
      <h1 className="titulo-desplazado titulo-arriba">RAUL</h1>
      <h1 className="titulo-desplazado">COLLAZO</h1>
      <TypeAnimation
        sequence={[
          "$ echo Desarollo Backend",
          1000,
          "$ echo Desarollo APIRest",
          1000,
          "$ echo Desarollo de Software",
          1000,
          "$ echo Analisis de Sistemas",
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="typewrite-container"
        repeat={Infinity}
      />
    </>
  );
};

export default TypeWrite;
