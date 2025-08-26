import { createRoot } from '@simpreact/simpreact/dom';

import { App } from './App.tsx';
import './index.css';
import { themes } from './themes.ts';

let theme = localStorage.getItem('theme');

if (!theme || !themes.includes(theme)) {
  theme = 'green-goblin';
}

document.documentElement.setAttribute('data-theme', theme);

createRoot(document.getElementById('root')!).render(<App />);
