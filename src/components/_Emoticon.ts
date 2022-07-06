import styled, { css, Keyframes } from 'styled-components';

export const S_Emoticon = styled.picture`
  background-color: var(--theme-secondary);
  padding-block: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  box-shadow: var(--theme-shadow);
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s, box-shadow 0.3s, border-color 0.3s;

  :hover,
  :focus-within {
    border-color: var(--theme-selection);
  }

  .buttons-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }

  .keyboard-wrapper {
    display: none;

    @media screen and (hover: hover) {
      display: initial;
    }
  }

  .keyboard-button {
    width: 30px;
    height: 18px;
    background: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
    color: #90a4b7;
    padding-block: 0.8rem 0.9rem;
    border-radius: 3px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
      0 1px 2px 1px rgba(30, 35, 90, 0.4);
  }
`;

interface IImage {
  animation: Keyframes;
}

export const S_Image = styled.img<IImage>(
  props => css`
    width: 3rem;
    height: 3rem;
    margin-inline: auto;

    &.active {
      animation: ${props.animation} 0.5s linear;
    }
  `
);

interface IButton {
  gradientDirection: 'right' | 'left';
}

export const S_Button = styled.button<IButton>(
  props => css`
    width: 50%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s;
    outline: none;

    :hover,
    :focus {
      opacity: 1;
      background: linear-gradient(
        to ${props.gradientDirection},
        var(--theme-selection),
        transparent
      );
    }
  `
);
