import {
  SiPython,
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiNextdotjs,
  SiMongodb,
  SiJavascript,
} from "@icons-pack/react-simple-icons";
import type { IconType } from "@icons-pack/react-simple-icons/types";
import Link from "../../node_modules/next/link";

interface Tech {
  icon: IconType;
  name: string;
  href: string;
}

const techs: Tech[] = [
  {
    icon: SiPython,
    name: "Python",
    href: "https://www.python.org",
  },
  {
    icon: SiCplusplus,
    name: "C++",
    href: "https://cplusplus.com/",
  },
  {
    icon: SiReact,
    name: "React",
    href: "https://react.dev",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
    href: "https://tailwindcss.com/",
  },
  {
    icon: SiGit,
    name: "Git",
    href: "https://git-scm.com/",
  },
  {
    icon: SiNextdotjs,
    name: "NextJS",
    href: "https://nextjs.org/",
  },
  {
    icon: SiJavascript,
    name: "Javascript",
    href: "https://www.javascript.com/",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    href: "https://www.mongodb.com/",
  },
];

const Technologies = () => {
  return (
    <div className="container mx-auto p-8 mt-0 font-mono">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold text-white mr-4 mb-5">
          Technologies
        </h2>
        <p className="text-sm text-muted-foreground opacity-80 mb-4">
          Programming languages, frameworks, libraries, and tools I enjoy...
        </p>
      </div>
      <div className="grid grid-cols-4 items-center gap-x-4 gap-y-9 text-sm">
        {techs.map((tech, index) => (
          <div className="flex justify-center" key={index}>
            <Link
              className="group flex w-fit flex-col items-center gap-1"
              href={tech.href}
              target="_blank"
            >
              <tech.icon className="h-8 w-8 transition-opacity group-hover:opacity-70" />
              <span className="text-muted-foreground">{tech.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
