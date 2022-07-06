import { useContext } from 'react';
import styled from 'styled-components';
import { CtxTheme } from 'context/ThemeContext';
import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineMoon } from 'react-icons/hi';

export default function Header() {
  const { toggleTheme } = useContext(CtxTheme);

  return (
    <S_Header>
      <h1>EMOTES GB</h1>
      <aside>
        <button onClick={toggleTheme}>
          <HiOutlineMoon />
        </button>

        <a href="https://github.com/jeanchirinos/emotes-gunbound">
          <AiFillGithub />
        </a>
      </aside>
    </S_Header>
  );
}

const S_Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  aside {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  svg {
    width: 2rem;
    height: 2rem;
    padding: 0.25rem;
    display: block;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
  }
`;
