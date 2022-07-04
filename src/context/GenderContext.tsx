import { IContextComponent, TGender } from 'interfaces';
import { createContext, useState } from 'react';

interface CtxProps {
  gender: TGender;
  toggleGender(): void;
}

const initialState = {
  gender: 'male' as const,
  toggleGender: () => {},
};

export const CtxGender = createContext<CtxProps>(initialState);

export default function GenderContext({ children }: IContextComponent) {
  const [gender, setGender] = useState<TGender>('male');

  function toggleGender() {
    let newGender: TGender;

    if (gender === 'male') {
      newGender = 'female';
    } else {
      newGender = 'male';
    }

    setGender(newGender);
  }

  return (
    <CtxGender.Provider value={{ gender, toggleGender }}>
      {children}
    </CtxGender.Provider>
  );
}
