import Button from "./Button";
import { FaNewspaper } from "react-icons/fa6";
import { FaScroll } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex items-center h-12 min-w-full max-w-full mb-3 lg:mb-3 bg-gray-900 place-content-end w-full">
            <div className="flex items-center h-full">
                <Button
                    name={"Writing"}
                    icon={
                        <div className="text-lg">
                            <FaNewspaper />
                        </div>
                    }
                    href={"/"}
                ></Button>
                <Button
                    name={"Resume"}
                    icon={
                        <div className="text-lg">
                            <FaScroll />
                        </div>
                    }
                    href={"/"}
                ></Button>
            </div>
        </div>
    );
};

export default Header;
