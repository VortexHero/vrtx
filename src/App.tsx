import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "./config";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Project from "./Project";

function App() {
  return (
    <main className="min-h-screen w-screen bg-gray-950 text-gray-200">
      <div className="flex w-full flex-col sm:flex-row">
        <div className="z-[1] flex h-screen w-full basis-1/3 flex-col gap-4 overflow-y-auto p-4 sm:sticky sm:top-0">
          <h1 className="text-2xl font-semibold">
            👋 Hi, I'm{" "}
            <span className="bg-gradient-to-br from-purple-500 to-violet-500 bg-clip-text font-bold text-transparent">
              Arya
            </span>
            !
          </h1>
          <p className="after:content-['_👇'] sm:after:content-['_👉']">
            I am a Computer Science student at Rutgers University-New Brunswick
            with various projects. Check them out!
          </p>
          <div className="flex gap-2">
            <a
              className="text-3xl transition hover:text-purple-500"
              target="_blank"
              href="https://github.com/VortexHero"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="w-full basis-2/3 pb-4">
          <h2 className="custom-blur sticky top-0 z-[1] p-4 text-2xl font-semibold">
            Projects:
          </h2>
          <div className="flex flex-wrap px-4">
            {config.projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
