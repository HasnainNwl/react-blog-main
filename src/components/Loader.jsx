import React from "react";

import { HashLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="absolute">
            <div className=" relative left-[10%]">
                <HashLoader color="#36d7b7" />
            </div>
        </div>
    );
};

export default Loader;
