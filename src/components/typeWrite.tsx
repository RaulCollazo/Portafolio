// src/components/TypeWrite.tsx
import { TypeAnimation } from "react-type-animation";

const TypeWrite = () => {
  return (
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
  );
};

export default TypeWrite;
