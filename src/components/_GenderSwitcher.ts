import { TGender } from 'interfaces';
import styled, { css } from 'styled-components';

interface Props {
  gender: TGender;
}

export const S_Wrapper = styled.section`
  margin-block: 1.5rem;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  z-index: 2;
  padding-block: 1.5rem;
`;

export const S_GenderSwitcher = styled.button<Props>(
  ({ gender }) => css`
    width: 48px;
    height: 28px;
    background-color: ${gender === 'female' ? '#F43180' : '#43A6E9'};
    color: white;
    border-radius: 1rem;
    margin-inline: auto;
    display: flex;
    align-items: center;
    padding-inline: 3px;
    transition: background-color 0.3s;

    :after {
      content: '';
      background-color: white;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      transform: ${gender === 'female' && 'translateX(24px)'};
      transition: transform 0.3s;
    }
  `
);
