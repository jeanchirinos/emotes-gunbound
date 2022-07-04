import styled from 'styled-components';
import Emoticon from 'components/Emoticon';
import Header from 'components/Header';
import emoticons from 'data';
import { useEffect } from 'react';
import { TVersion } from 'interfaces';
import GenderSwitcher from 'components/GenderSwitcher';

export default function App() {
  function clickSound(e: any) {
    let version: TVersion = 'old';
    // if (e.shiftKey) version = 'new';
    if (e.altKey) version = 'new';

    const emoticon = emoticons.find(
      // emoticon => e.code == `Digit${emoticon.number}`
      emoticon => e.key == emoticon.number
    );

    const element = document.getElementById(`${emoticon?.name}_${version}`);
    element?.click();
    element?.focus();
  }

  useEffect(() => {
    document.addEventListener('keydown', clickSound);

    return () => {
      document.removeEventListener('keydown', clickSound);
    };
  }, []);

  return (
    <>
      <Header />
      <GenderSwitcher />
      <S_Main>
        {emoticons.map(props => (
          <Emoticon key={props.name} {...props} />
        ))}
      </S_Main>
    </>
  );
}

const S_Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
`;
