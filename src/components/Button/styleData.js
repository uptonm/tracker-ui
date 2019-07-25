import { default as styleData } from '../../assets/variables';
export default (type, outline, disabled) => {
  return {
    btn: {
      opacity: disabled ? '0.65' : '1',
      padding: '1rem 2rem',
      border: 'none',
      borderRadius: styleData.variables.borderRadius,
      transition: 'all 0.2s ease-in-out',
      ':focus': {
        outline: 'none',
        boxShadow: disabled
          ? 'none'
          : `0 0 ${styleData.variables.borderWidth} ${
              styleData.variables.borderWidth
            } ${styleData.colors[type]}`,
        backgroundColor: disabled
          ? outline
            ? 'transparent'
            : styleData.colors[type]
          : `${styleData.colors[type]}Hover`,
        color: disabled
          ? outline
            ? styleData.colors[type]
            : styleData.colors.white
          : type === 'link'
          ? styleData.colors.primaryHover
          : styleData.colors.white
      },
      [type]: {
        border: outline
          ? `${styleData.variables.borderWidth} solid ${styleData.colors[type]}`
          : 'none',
        backgroundColor: outline ? 'transparent' : styleData.colors[type],
        color: outline ? styleData.colors[type] : styleData.colors.white,
        cursor: disabled ? 'default' : 'pointer',
        ':hover': {
          backgroundColor: disabled
            ? outline
              ? 'transparent'
              : styleData.colors[type]
            : outline
            ? styleData.colors[type]
            : styleData.colors[`${type}Hover`],
          border: disabled
            ? outline
              ? `${styleData.variables.borderWidth} solid ${
                  styleData.colors[type]
                }`
              : 'none'
            : outline
            ? `${styleData.variables.borderWidth} solid ${
                styleData.colors[type]
              }`
            : 'none',
          color: disabled
            ? outline
              ? styleData.colors[type]
              : styleData.colors.white
            : styleData.colors.white,
          cursor: disabled ? 'default' : 'pointer'
        }
      },
      link: {
        backgroundColor: 'transparent',
        color: styleData.colors.primary,
        cursor: disabled ? 'default' : 'pointer',
        ':hover': {
          color: disabled
            ? styleData.colors.primary
            : styleData.colors.primaryHover,
          textDecoration: disabled ? 'none' : 'underline',
          cursor: disabled ? 'default' : 'pointer'
        },
        ':focus': {
          boxShadow: disabled
            ? 'none'
            : `0 0 ${styleData.variables.borderWidth} ${
                styleData.variables.borderWidth
              } ${styleData.colors.primary}`
        }
      }
    }
  };
};
