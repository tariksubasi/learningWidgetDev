const useGetStaticPropertyTypes = props => {
    const { staticStr, staticMultilineStr, staticBool, staticInteger, staticDecimal: stDecimal, staticEnum } = props;
    return {
        staticStr,
        staticMultilineStr,
        staticBool,
        staticInteger,
        staticDecimal: parseFloat(stDecimal),
        staticEnum
    };
};

export default useGetStaticPropertyTypes;
