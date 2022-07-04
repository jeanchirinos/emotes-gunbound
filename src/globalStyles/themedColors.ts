import { css } from 'styled-components';

export const themedColors = (darkTheme: boolean) => css`
  /* Light */
  --theme-background: #fbfbfb;
  --theme-color: #121212;
  --theme-secondary: #efefef;
  --theme-selection: rgb(173, 10, 81, 0.2);
  --theme-shadow: 1px 4px 4px 1px rgba(194, 194, 194, 0.4);
  --theme-scrollbar: rgba(0, 0, 0, 0.2);

  /* Dark */
  ${darkTheme &&
  css`
    --theme-background: #121212;
    --theme-color: #fbfbfb;
    --theme-secondary: #1e1e1e;
    --theme-selection: rgb(173, 10, 81, 0.5);
    --theme-shadow: 1px 4px 4px 1px rgba(0, 0, 0, 0.4);
    --theme-scrollbar: rgba(255, 255, 255, 0.2);
  `}
`;
