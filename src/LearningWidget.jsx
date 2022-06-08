import React, { createElement } from "react";
import Column from "./components/Column";
import useGetComponentPropertyTypes from "./hooks/useGetComponentPropertyTypes";
import useGetDynamicPropertyTypes from "./hooks/useGetDynamicPropertyTypes";
import useGetStaticPropertyTypes from "./hooks/useGetStaticPropertyTypes";
import "./ui/LearningWidget.css";

export function LearningWidget(props) {
    console.log("props", props);

    const staticWidgetTypes = useGetStaticPropertyTypes(props);
    const { iconClass, imageURL, widgetContent } = useGetComponentPropertyTypes(props);
    const { priceColor, textTemp, onChangePrice } = useGetDynamicPropertyTypes(props);

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
                        <h6>Widgets</h6>
                        {widgetContent}
                    </Column>
                    <Column>
                        <h3>Dynamic Widget Types</h3>
                        <h6>Expression</h6>
                        <div
                            style={{
                                backgroundColor: priceColor
                            }}
                        >
                            Price Color
                        </div>
                        <h6>Text Template</h6>
                        <div>{textTemp}</div>
                        <h6>Action</h6>
                        <button className={"btn btn-primary btn-sm"} onClick={onChangePrice}>
                            Change Price
                        </button>
                    </Column>
                </div>
            </div>
        </>
    );
}
