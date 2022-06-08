const useGetComponentPropertyTypes = props => {
    // icon
    const { icon } = props;

    let iconClass = "";

    if (icon.status === "available") {
        const {
            value: { iconClass: className }
        } = icon;

        iconClass = className;
    }

    // Image

    const { productImage } = props;
    let imageURL = "";

    if (productImage.status === "available") {
        imageURL = productImage.value.uri;
    }

    return { iconClass, imageURL };
};

export default useGetComponentPropertyTypes;
