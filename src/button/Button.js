/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

import { css } from '@emotion/react';

import {
  backgroundColors,
  backgroundColorsOnHover,
  borderColors,
  borderColorsOnHover,
  fontColors,
  sizes,
} from './variables';

const Button = (props) => {
  const {
    children,
    handleClick,
    variant,
    disableShadow,
    disabled,
    startIcon,
    endIcon,
    size,
    color,
  } = props;

  const buttonCss = {
    default: css({
      backgroundColor: backgroundColors[color],
      color: color === 'default' ? fontColors.darkGray : fontColors.white,

      width: 'max-content',
      
      fontFamily: '\'Noto Sans\', sans-serif',
      fontWeight: 500,
      fontSize: 12,
      lineHeight: '20.27px',
      textAlign: 'center',

      padding: sizes[size],
      border: `1px solid ${backgroundColors[color]}`,
      borderRadius: 6,

      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      justifyContent: 'center',
      columnGap: 8,

      boxSizing: 'border-box',
      cursor: 'pointer',
      boxShadow: !disableShadow && '0px 2px 3px 0px #33333333',

      '&:hover': {
        backgroundColor: backgroundColorsOnHover[color],
      },
      '&:disabled': {
        backgroundColor: backgroundColors.default,
        color: fontColors.gray,
        boxShadow: '0px 0px 0px 0px #FFFFFF',
        cursor: 'default'
      }
    }),
    variant: css({
      backgroundColor: backgroundColors.variant,
      color: fontColors.blue,
      borderColor: 
        variant === 'outline' 
          ? borderColors.outline 
          : variant === 'text' && borderColors.text,
      boxShadow: '0px 0px 0px 0px #FFFFFF',
    
      '&:hover': {
        backgroundColor: backgroundColorsOnHover.variant,
        borderColor: variant === 'text' && borderColorsOnHover.text
      },
      '&:disabled': {
        backgroundColor: backgroundColors.variant,
        color: fontColors.gray,
        borderColor: borderColors.text,
        cursor: 'default',
        '&:hover': {
          backgroundColor: backgroundColors.variant,
          color: fontColors.gray,
          borderColor: borderColors.text,
        }
      },
    }),
    icon: css({
      fontSize: 18
    })
  };

  return (
    <button
      css={[buttonCss.default, variant !== '' && buttonCss.variant]}
      disabled={disabled}
      onClick={handleClick}
    >
      {startIcon && (
        <span className="material-icons" css={buttonCss.icon}>
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && (
        <span className="material-icons" css={buttonCss.icon}>
          {endIcon}
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  handleClick: PropTypes.func,
  variant: PropTypes.oneOf(['outline', 'text', '']),
  disableShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger'])
};

Button.defaultProps = {
  children: 'Button',
  handleClick: () => {},
  variant: '',
  disableShadow: false,
  disabled: false,
  startIcon: '',
  endIcon: '',
  size: 'md',
  color: 'default'
};

export default Button;
