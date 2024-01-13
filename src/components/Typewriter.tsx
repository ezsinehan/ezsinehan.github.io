import internal from "stream";
import Typewriter from "typewriter-effect";

interface TyperwriterTextProps {
  texts: string[];
  pause: number;
}

const TypewriterText: React.FC<TyperwriterTextProps> = ({ texts, pause }) => {
  return (
    <Typewriter
      options={{
        strings: texts,
        delay: 110,
        autoStart: true,
        pauseFor: pause,
        loop: true,
      }}
    />
  );
};

export default TypewriterText;
