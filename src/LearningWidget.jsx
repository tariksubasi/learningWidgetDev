import React, { createElement } from "react";
import Column from "./components/Column";
import useGetComponentPropertyTypes from "./hooks/useGetComponentPropertyTypes";
import useGetDynamicPropertyTypes from "./hooks/useGetDynamicPropertyTypes";
import useGetStaticPropertyTypes from "./hooks/useGetStaticPropertyTypes";
import "./ui/LearningWidget.css";

export function LearningWidget(props) {
    console.log("props", props);

    const staticWidgetTypes = useGetStaticPropertyTypes(props);
    const { iconClass, imageURL } = useGetComponentPropertyTypes(props);
    const { priceColor, textTemp } = useGetDynamicPropertyTypes(props);

    console.warn("iconClass", iconClass);
    return (
        <>
            <div className="mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid">
                <div className="row">
                    <Column>
                        <h3>Static Widget Types</h3>
                        {Object.keys(staticWidgetTypes).map(key => {
                            return (
                                <div>
                                    <strong>{key}</strong>
                                    {":" + staticWidgetTypes[key]}
                                </div>
                            );
                        })}
                    </Column>
                    <Column>
                        <h3>Component Widget Types</h3>
                        <h6>Icon</h6>
                        <span className={"glyphicon " + iconClass}></span>
                        <h6>Image</h6>
                        <img src={imageURL} width={100} height={100} />
                    </Column>
                    <Column>
                        <h3>Dynamic Widget Types</h3>
                        <div
                            style={{
                                backgroundColor: priceColor
                            }}
                        >
                            Price Color
                        </div>
                        <div>{textTemp}</div>
                    </Column>
                </div>
            </div>
        </>
    );
}
