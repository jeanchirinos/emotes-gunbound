import { useContext } from 'react';
import { CtxTheme } from '../context/ThemeContext';
import { HiOutlineMoon } from 'react-icons/hi';

export default function ThemeSwitcher() {
  const { toggleTheme } = useContext(CtxTheme);

  return (
    <button onClick={toggleTheme} className="icon-container">
      <HiOutlineMoon />
    </button>
  );
}
