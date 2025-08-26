import type { SimpElement } from '@simpreact/simpreact';
import css from './Prompt.module.css';
import { UTFChar } from '../char.ts';

export function Prompt(): SimpElement {
  return (
    <span>
      <span class={css.User_part}>{'visitor'}</span>
      {UTFChar.AT}
      <span class={css.Main_part}>{'terminal.paskhin.dev'}</span>
      {UTFChar.COLON}
      {UTFChar.TILDE}
      {UTFChar.DOLLAR}
    </span>
  );
}
