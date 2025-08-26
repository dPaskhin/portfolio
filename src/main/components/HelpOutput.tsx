import type { SimpElement } from '@simpreact/simpreact';
import { commands } from '../commands.ts';
import css from './HelpOutput.module.css';
import { UTFChar } from '../char.ts';

export function HelpOutput(): SimpElement {
  return (
    <div class={css.Command_List}>
      {commands.map(command => (
        <div
          class={css.Command}
          key={command.name}
        >
          <code>{command.name}</code>
          <span>
            {UTFChar.EM_DASH}
            {UTFChar.NO_BREAK_SPACE}
            {command.description}
          </span>
        </div>
      ))}
    </div>
  );
}
