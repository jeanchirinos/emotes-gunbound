import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
const babelConfig = {
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          displayName: true,
          fileName: false,
        },
      ],
    ],
  },
};

export default defineConfig({
  plugins: [react(babelConfig), tsconfigPaths()],
});
