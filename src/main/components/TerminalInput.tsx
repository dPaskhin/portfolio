import type { Ref, SimpElement } from '@simpreact/simpreact';
import css from './TerminalInput.module.css';

interface IProps {
  ref: Ref<HTMLInputElement | null>;
  value: string;
  onInput: (value: string) => void;
  onSubmit: () => void;
  onKeyDown: (event: KeyboardEvent) => void;
}

export function TerminalInput(props: IProps): SimpElement {
  const { ref, value, onInput, onSubmit, onKeyDown } = props;

  return (
    <form
      class={css.Root}
      onSubmit={event => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <input
        // TODO
        ref={ref as Ref<HTMLInputElement>}
        class={css.Input}
        type={'text'}
        name={'terminal-input'}
        autoComplete={'off'}
        spellCheck={'false'}
        autoFocus={true}
        autoCapitalize={'off'}
        value={value}
        onInput={event => onInput((event.target as HTMLInputElement).value)}
        onKeyDown={event => onKeyDown(event.nativeEvent)}
      />
    </form>
  );
}
