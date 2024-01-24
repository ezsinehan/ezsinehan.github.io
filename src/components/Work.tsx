import Link from "../../node_modules/next/link";
import TypewriterText from "./Typewriter";

const Work = () => {
  return (
    <div className="container mx-auto p-8 mt-2 font-mono">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold text-white mr-4 mb-5">My Work</h2>
        <p className="text-sm text-muted-foreground opacity-80 mb-4">
          Projects I have worked on...
        </p>
      </div>
      <section className="grid gap-4 sm:grid-cols-2">
        <Link
          className="p-4 rounded-md border border-solid border-gray-400"
          href={"https://github.com/ezsinehan/sinehanezhilmuthu.com"}
        >
          <h3 className="text-lg font-semibold text-white mb-2">
            sinehanezhilmuthu.com
          </h3>
          <p className="text-sm text-gray-400">
            This is the website you are currently on, my portofolio website,
            created using NextJS and TailwindCSS.
          </p>
        </Link>
        <Link
          className="p-4 rounded-md border border-solid border-gray-400"
          href={"https://github.com/ezsinehan/wordle-game"}
        >
          <h3 className="text-lg font-semibold text-white mb-2">
            Terminal Wordle Game
          </h3>
          <p className="text-sm text-gray-400">
            Object-oriented Wordle game using C++ for terminal play, with
            functional keyboard and local statistics.
          </p>
        </Link>
        <Link
          className="p-4 rounded-md border border-solid border-gray-400"
          href={"https://studybox.sinehan.dev/"}
        >
          <h3 className="text-lg font-semibold text-white mb-2">Studybox</h3>
          <p className="text-sm text-gray-400">Coming Soon...</p>
        </Link>
        <Link
          className="p-4 rounded-md border border-solid border-gray-400"
          href={""}
        >
          <h3 className="text-lg font-semibold text-white mb-2">
            <TypewriterText texts={["In Progress", "Elitecode"]} />
          </h3>
          <p className="text-sm text-gray-400">Coming Soon...</p>
        </Link>
        <Link
          className="p-4 rounded-md border border-solid border-gray-400"
          href={""}
        >
          <h3 className="text-lg font-semibold text-white mb-2">In Progress</h3>
          <p className="text-sm text-gray-400">Coming Soon...</p>
        </Link>
        <Link
          className="p-4 rounded-md border border-solid border-gray-400"
          href={""}
        >
          <h3 className="text-lg font-semibold text-white mb-2">In Progress</h3>
          <p className="text-sm text-gray-400">Coming Soon...</p>
        </Link>
      </section>
    </div>
  );
};

export default Work;
