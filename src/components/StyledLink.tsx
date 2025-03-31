import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
    link: string;
    text: string;
};

const StyledLink = (props: Props) => {
    return (
        <a className="text-blue-400 inline" href={props.link}>
            <div className="inline space-x-1 group/nested">
                <span className="inline group-hover/nested:text-blue-500">
                    {props.text}
                </span>
                <FaExternalLinkAlt className="inline mx-0.5 text-xs group-hover/nested:text-blue-500 mb-1" />
            </div>
        </a>
    );
};

export default StyledLink;
