import internal from "stream";
import Typewriter from "typewriter-effect";

interface TyperwriterTextProps {
  texts: string[];
}

const TypewriterText: React.FC<TyperwriterTextProps> = ({ texts }) => {
  return (
    <Typewriter
      options={{
        strings: texts,
        delay: 110,
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterText;
