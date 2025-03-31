import { JSX } from "react";

type Props = {
    date: string;
    title: string;
    company: string;
    description: JSX.Element[];
    tags: JSX.Element[];
};

const ExperienceCell = (props: Props) => {
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
        <div className="border border-gray-900 hover:border-teal-300 rounded-lg group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 py-3 -mx-3 px-3 mb-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 mb-2 sm:mb-0">
                {props.date}
            </h3>
            <div className="sm:col-span-6">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-200 sm:mb-0.5 group-hover:text-teal-200">
                    {props.title}
                </h3>
                <h4 className="text-sm text-slate-500 mb-1.5 group-hover:text-teal-400/50">
                    {props.company}
                </h4>
                {paragraphs}
                <div className="flex flex-wrap items-center space-x-2">
                    {tags}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCell;
