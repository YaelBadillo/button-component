import { css, Global } from '@emotion/react';

const globalStylesCss = css({
  html: {
    fontSize: '100%',
    boxSizing: 'border-box'
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },
  body: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    fontFamily: 'Bellefair, sans-serif',
    padding: 0,
    margin: 0
  },
  'html, body': {
    width: '100%',
    height: '100%'
  },
  img: {
    verticalAlign: 'top'
  },
  'select, option': {
    boxSizing: 'border-box'
  },
  'ul, ol, li': {
    padding: 0,
    margin: 0
  }
});

const globalStyles = <Global styles={globalStylesCss} />;

export default globalStyles;