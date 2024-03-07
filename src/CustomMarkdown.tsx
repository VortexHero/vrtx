import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
function CustomMarkdown({ text }: { text: string }) {
  return (
    <Markdown
      className="mt-4"
      components={{
        a: (props) => (
          <a
            href={props.href}
            target="_blank"
            className="inline-flex items-center gap-2 underline decoration-gray-400 decoration-dotted"
          >
            {props.children}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        ),
        li: (props) => <li className="overflow-visible">{props.children}</li>,
        ul: (props) => (
          <ul className="my-2 list-disc pl-6">{props.children}</ul>
        ),
        ol: (props) => (
          <ol className="my-4 list-decimal pl-6">{props.children}</ol>
        ),
        blockquote: (props) => (
          <blockquote className="my-4 border-l-4 border-purple-500 pl-2.5">
            {props.children}
          </blockquote>
        ),
        h1: (props) => (
          <h1 className="my-4 text-2xl font-medium">{props.children}</h1>
        ),
        h2: (props) => (
          <h2 className="my-4 text-xl font-medium">{props.children}</h2>
        ),
        h3: (props) => (
          <h3 className="my-4 text-lg font-medium">{props.children}</h3>
        ),
        h4: (props) => (
          <h4 className="my-4 text-lg font-medium">{props.children}</h4>
        ),
        h5: (props) => (
          <h5 className="my-4 text-lg font-medium">{props.children}</h5>
        ),
        p: (props) => <p className="my-2">{props.children}</p>,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {text}
    </Markdown>
  );
}

export default CustomMarkdown;
