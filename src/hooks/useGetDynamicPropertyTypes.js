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

    // Action

    const { changePrice } = props;

    const onChangePrice = () => {
        if (changePrice && changePrice.canExecute) {
            changePrice.execute();
        }
    };

    // Attribute
    let productPrice = null;
    const {
        productPrice: { status: priceStatus, value: prodPrice, setValue: setPriceValue }
    } = props;

    if (priceStatus === "available") {
        productPrice = parseFloat(prodPrice);
    }

    // Action

    const { objectType } = props;

    return {
        priceColor,
        textTemp,
        onChangePrice,
        productPrice,
        setPriceValue,
        objectType
    };
};

export default useGetDynamicPropertyTypes;
