import React, { createElement } from "react";

const Column = ({ children }) => {
    return <div className="col-lg col-md col">{children}</div>;
};

export default Column;
