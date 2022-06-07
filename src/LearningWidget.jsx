import { createElement } from "react";
import "./ui/LearningWidget.css";

export function LearningWidget(props) {
    console.log("props", props);

    const { sampleText } = props;
    return <div>{sampleText}</div>;
}
