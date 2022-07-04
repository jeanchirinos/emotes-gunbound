import { IContextComponent } from 'interfaces';
import { createContext, useLayoutEffect, useState } from 'react';
import GlobalStyles from '../globalStyles';

interface CtxProps {
  toggleTheme(): void;
}

const initialState = {
  toggleTheme: () => {},
};

export const CtxTheme = createContext<CtxProps>(initialState);

export default function ThemeContext({ children }: IContextComponent) {
  const [darkTheme, setDarkTheme] = useState(false);

  useLayoutEffect(() => {
    getTheme();
    window.onload = () => document.body.classList.add('with-transition');
  }, []);

  function getTheme() {
    try {
      const localTheme = JSON.parse(localStorage.darkTheme);
      setDarkTheme(localTheme);
    } catch {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        setDarkTheme(true);
    }
  }

  function toggleTheme() {
    localStorage.darkTheme = !darkTheme;
    setDarkTheme(!darkTheme);
  }

  return (
    <CtxTheme.Provider value={{ toggleTheme }}>
      <GlobalStyles darkTheme={darkTheme} />
      {children}
    </CtxTheme.Provider>
  );
}
