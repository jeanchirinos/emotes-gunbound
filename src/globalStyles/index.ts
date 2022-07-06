import { css, createGlobalStyle } from 'styled-components';
import { themedColors } from './themedColors';
import '@fontsource/grandstander/400.css';
import '@fontsource/grandstander/900.css';

interface Props {
  darkTheme: boolean;
}

export default createGlobalStyle<Props>(
  props => css`
    * {
      box-sizing: border-box;
      margin: 0;
      /* outline: 0.5px solid blue; */
    }

    a {
      color: inherit;
    }

    button {
      background-color: transparent;
      color: inherit;
      border: none;
      padding: 0;
      cursor: pointer;
    }

    ::selection {
      background-color: var(--theme-selection);
    }

    ::-webkit-scrollbar {
      background-color: transparent;
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--theme-scrollbar);
      border-radius: 10px;
    }

    :root {
      ${themedColors(props.darkTheme)}
      --primary: #E84507;
    }

    h1 {
      font-weight: 900;
    }

    body {
      background-color: var(--theme-background);
      color: var(--theme-color);
      font-family: 'Grandstander';

      &.with-transition {
        transition: background-color 0.3s, color 0.3s;
      }
    }

    #root {
      padding-block: 2rem;

      > * {
        width: 750px;
        max-width: 90%;
        margin-inline: auto;
      }
    }
  `
);
