import styled from 'styled-components';
import ThemeSwitcher from './ThemeSwitcher';
import { AiFillGithub } from 'react-icons/ai';

export default function Header() {
  return (
    <S_Header>
      <h1>EMOTES GB</h1>
      <aside>
        <ThemeSwitcher />
        <a
          href="https://github.com/jeanchirinos/emotes-gunbound"
          className="icon-container"
        >
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
`;
