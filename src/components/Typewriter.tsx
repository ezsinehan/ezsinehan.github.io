import Typewriter, { Options } from "typewriter-effect";

interface TypewriterTextProps {
  texts: string[];
}

interface ExtendedOptions extends Options {
  pauseFor: number;
}
const TypewriterText: React.FC<TypewriterTextProps> = ({ texts }) => {
  return (
    <Typewriter
      options={
        {
          strings: texts,
          delay: 110,
          pauseFor: 100,
          autoStart: true,
          loop: true,
        } as ExtendedOptions
      }
    />
  );
};

export default TypewriterText;
