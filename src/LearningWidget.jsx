import React, { createElement } from "react";
import useGetComponentPropertyTypes from "./hooks/useGetComponentPropertyTypes";
import useGetStaticPropertyTypes from "./hooks/useGetStaticPropertyTypes";
import "./ui/LearningWidget.css";

export function LearningWidget(props) {
    console.log("props", props);

    const staticWidgetTypes = useGetStaticPropertyTypes(props);
    const { iconClass } = useGetComponentPropertyTypes(props);

    console.warn("iconClass", iconClass);
    return (
        <>
            <h3>Static Widget Types</h3>
            {Object.keys(staticWidgetTypes).map(key => {
                return (
                    <div>
                        <strong>{key}</strong>
                        {":" + staticWidgetTypes[key]}
                    </div>
                );
            })}

            <h3>Component Widget Types</h3>
            <h6>Icon</h6>
            <span className={"glyphicon " + iconClass}></span>
        </>
    );
}
