import type { config } from "./config";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import ProjectItem from "./ProjectItem";

function Project({ project }: { project: (typeof config.projects)[number] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="m-2 flex w-full flex-col gap-2 rounded-lg border-2 border-gray-200 p-4 text-left transition hover:scale-105 hover:border-purple-500 hover:bg-gray-900 md:basis-[calc(50%-1rem)]"
      >
        <h3 className="text-xl font-medium">{project.name}</h3>
        {project.projects ? (
          <small className="flex w-fit items-center gap-2 rounded-full border px-2">
            <FontAwesomeIcon icon={faShapes} />
            <span>Multiple Projects</span>
          </small>
        ) : (
          <></>
        )}
        <p className="grow">{project.tagline}</p>
        <small className="underline decoration-gray-400 decoration-dotted">
          Learn more...
        </small>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[1]"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left align-middle text-gray-200 shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="mb-4 flex items-start justify-between gap-2 text-3xl font-bold"
                  >
                    <h3 className="bg-gradient-to-br from-purple-500 to-violet-500 bg-clip-text text-transparent">
                      {project.name}
                    </h3>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-xl"
                      aria-label="Close"
                    >
                      <FontAwesomeIcon icon={faCircleXmark} />{" "}
                    </button>
                  </Dialog.Title>
                  <Dialog.Description as="div">
                    <ProjectItem project={project} name={false} />
                  </Dialog.Description>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Project;
