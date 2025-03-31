import { JSX } from "react";

type ButtonProps = {
    name: string;
    icon: JSX.Element;
    href: string;
};

const Button = ({ name, icon, href }: ButtonProps) => {
    return (
        <a href={href}>
            <button className="h-full rounded-lg flex items-center space-x-3 px-3 py-3 border bg-gray-900 hover:text-blue-300 border-gray-900 text-gray-200 text-sm md:text-base hover:cursor-pointer">
                <div>{icon}</div>
                <div className="block">{name}</div>
            </button>
        </a>
    );
};

export default Button;
