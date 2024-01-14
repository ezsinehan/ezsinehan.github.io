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
        pauseFor: 100, // No type assertion needed
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterText;
