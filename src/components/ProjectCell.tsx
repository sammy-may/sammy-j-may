import { JSX } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
    img: string;
    link: string;
    title: string;
    description: JSX.Element[];
    tags: JSX.Element[];
};

const ProjectCell = (props: Props) => {
    const paragraphs = props.description.map((text, index) => (
        <p
            key={props.title + "pars" + index}
            className="text-sm font-medium tracking-wide text-gray-400 mb-3 group-hover:text-slate-200"
        >
            {text}
        </p>
    ));

    const tags = props.tags.map((text, index) => (
        <p
            key={props.title + "tags" + index}
            className="text-xs font-semibold bg-teal-400/10 text-teal-200 rounded-full px-3 py-1 w-min mb-2"
        >
            {text}
        </p>
    ));

    return (
        <a
            href={props.link}
            className="border border-gray-900 hover:border-teal-300 rounded-lg group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 py-3 -mx-3 px-3 mb-3"
        >
            <div className="sm:col-span-3">
                <span className="align-middle h-full flex items-center">
                    <img src={props.img} alt="" className="w-full" />
                </span>
            </div>
            <div className="sm:col-span-5">
                <div className="space-x-2">
                    <h3 className="inline text-xs font-semibold uppercase tracking-wide text-slate-200 mb-0.5 group-hover:text-teal-200">
                        {props.title}
                    </h3>
                    <FaExternalLinkAlt className="text-xs inline group-hover:text-teal-200" />
                </div>
                {paragraphs}
                <div className="flex flex-wrap items-center space-x-2">
                    {tags}
                </div>
            </div>
        </a>
    );
};

export default ProjectCell;
