const useGetComponentPropertyTypes = props => {
    const { icon } = props;

    let iconClass = "";

    if (icon.status === "available") {
        const {
            value: { iconClass: className }
        } = icon;

        iconClass = className;
    }

    return { iconClass };
};

export default useGetComponentPropertyTypes;
