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

    a,
    button {
      all: unset;
      cursor: pointer;
      box-sizing: border-box;
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
        width: min(750px, 90%);
        margin-inline: auto;
      }
    }

    .icon-container {
      border-radius: 0.5rem;
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;

      :focus-visible {
        outline: auto;
      }

      :hover {
        opacity: 0.5;
      }

      > svg {
        display: block;
        font-size: 1.8rem;
      }
    }
  `
);
