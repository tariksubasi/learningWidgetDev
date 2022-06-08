const useGetDynamicPropertyTypes = props => {
    // Expression
    let priceColor = "";
    const {
        priceColor: { status: prcColorStatus, value: prcColor }
    } = props;

    if (prcColorStatus === "available") {
        priceColor = prcColor;
    }

    // Text Template
    let textTemp = "";
    const {
        textTemp: { status: textTempStatus, value: prodTemplate }
    } = props;

    if (textTempStatus === "available") {
        textTemp = prodTemplate;
    }

    return {
        priceColor,
        textTemp
    };
};

export default useGetDynamicPropertyTypes;
