import { CtxGender } from 'context/GenderContext';
import { useContext } from 'react';
import { S_GenderSwitcher, S_Wrapper } from './_GenderSwitcher';

export default function GenderSwitcher() {
  const { gender, toggleGender } = useContext(CtxGender);

  return (
    <S_Wrapper>
      <S_GenderSwitcher gender={gender} onClick={toggleGender} />
    </S_Wrapper>
  );
}
