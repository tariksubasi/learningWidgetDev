import React, { createElement } from "react";
import useGetStaticPropertyTypes from "./hooks/useGetStaticPropertyTypes";
import "./ui/LearningWidget.css";

export function LearningWidget(props) {
    console.log("props", props);

    const staticWidgetTypes = useGetStaticPropertyTypes(props);

    console.warn("staticTypes", staticWidgetTypes);
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
        </>
    );
}
