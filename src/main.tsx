import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeContext from 'context/ThemeContext';
import GenderContext from 'context/GenderContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContext>
      <GenderContext>
        <App />
      </GenderContext>
    </ThemeContext>
  </StrictMode>
);
