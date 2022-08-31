/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import globalStyles from './globalStyles';
import Button from './button/Button';

const appCss = {
  app: css({
    padding: '33px 53px',
    display: 'flex',
    flexFlow: 'column nowrap',
    rowGap: 45
  }),
  title: css({
    fontFamily: '\'Poppins\', sans-serif',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: '36px',
    padding: 0,
    margin: 0
  }),
  label: css({
    fontFamily: '\'Ubuntu Mono\', sans-serif',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '12px'
  }),
  row: css({
    display: 'grid'
  }),
  item: css({
    width: 'max-content',
    display: 'flex',
    flexFlow: 'column nowrap',
    rowGap: 12,
  }),
};

const App = () => {
  return (
    <>
      {globalStyles}
      <div css={appCss.app}>
        <h1 css={appCss.title}>Buttons</h1>
        <div css={appCss.row}>
          <div css={appCss.item}>
            <span css={appCss.label}>{'<Button />'}</span>
            <Button>Default</Button>
          </div>
        </div>
        <div css={appCss.row}>
          <div css={appCss.item}>
            <span css={appCss.label}>{'<Button variant="outline" />'}</span>
            <Button variant="outline">Default</Button>
          </div>
        </div>
        <div css={appCss.row}>
          <div css={appCss.item}>
            <span css={appCss.label}>{'<Button variant="text" />'}</span>
            <Button variant="text">Default</Button>
          </div>
        </div>
        <div css={appCss.row}>
          <div css={appCss.item}>
            <span css={appCss.label}>
              {'<Button color="primary" disableShadow />'}
            </span>
            <Button color="primary" disableShadow>
              Default
            </Button>
          </div>
        </div>
        <div css={appCss.row} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div css={appCss.item}>
            <span css={appCss.label}>{'<Button disabled />'}</span>
            <Button disabled>Default</Button>
          </div>
          <div css={appCss.item}>
            <span css={appCss.label}>
              {'<Button variant="text" disabled />'}
            </span>
            <Button variant="text" disabled>
              Default
            </Button>
          </div>
        </div>
        <div css={appCss.row} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div css={appCss.item}>
            <span css={appCss.label}>
              {'<Button color="primary" startIcon="add_shopping_cart" />'}
            </span>
            <Button color="primary" startIcon="add_shopping_cart">
              Default
            </Button>
          </div>
          <div css={appCss.item}>
            <span css={appCss.label}>
              {'<Button color="primary" endIcon="add_shopping_cart" />'}
            </span>
            <Button color="primary" endIcon="add_shopping_cart">
              Default
            </Button>
          </div>
        </div>
        <div css={appCss.row} style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div css={appCss.item}>
            <span css={appCss.label}>{'<Button color="default" />'}</span>
            <Button color="default">Default</Button>
          </div>
          <div css={appCss.item}>
            <span css={appCss.label}>{'<Button color="primary" />'}</span>
            <Button color="primary">Default</Button>
          </div>
          <div css={appCss.item}>
            <span css={appCss.label}>{'<Button color="secondary" />'}</span>
            <Button color="secondary">Default</Button>
          </div>
          <div css={appCss.item}>
            <span css={appCss.label}>{'<Button color="danger" />'}</span>
            <Button color="danger">Default</Button>
          </div>
        </div>
        <div css={appCss.row} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div css={appCss.item}>
            <span css={appCss.label}>{'<Button size="sm" />'}</span>
            <Button color="primary" size="sm">
              Default
            </Button>
          </div>
          <div css={appCss.item}>
            <span css={appCss.label}>{'<Button size="md" />'}</span>
            <Button color="primary" size="md">
              Default
            </Button>
          </div>
          <div css={appCss.item}>
            <span css={appCss.label}>{'<Button size="lg" />'}</span>
            <Button color="primary" size="lg">
              Default
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
