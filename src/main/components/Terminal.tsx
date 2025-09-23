import type { SimpElement } from '@simpreact/simpreact';
import { batchingRerenderLocker } from '@simpreact/simpreact/internal';

import css from './Terminal.module.css';
import { Prompt } from './Prompt.tsx';
import { TerminalInput } from './TerminalInput.tsx';
import { useState } from '../useState.ts';
import { useEffect, useRef } from '@simpreact/simpreact/hooks';
import { Output } from './Output.tsx';

interface IHistoryRecord {
  command: string;
  input: string;
  args?: string[];
  inputHistorySnapshot?: string[];
}

export function Terminal(): SimpElement {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState('');
  const [history, setHistory] = useState<Array<IHistoryRecord>>([{ command: 'welcome', input: 'welcome' }]);

  const historyRecordPointerRef = useRef(1);

  useEffect(() => {
    const forceFocus = () => {
      inputRef.current!.focus();
    };

    document.addEventListener('click', forceFocus);

    return () => {
      document.removeEventListener('click', forceFocus);
    };
  }, []);

  const handleChange = () => {
    batchingRerenderLocker.lock();

    setValue('');

    const command = parseCommand(value);

    if (command.name === 'clear') {
      historyRecordPointerRef.current = 0;
      setHistory([]);
    } else if (command.name === 'history') {
      historyRecordPointerRef.current = history.length + 1;
      setHistory([
        ...history,
        {
          command: command.name,
          input: value,
          inputHistorySnapshot: history.map(record => record.input),
        },
      ]);
    } else {
      historyRecordPointerRef.current = history.length + 1;
      setHistory([
        ...history,
        {
          command: command.name,
          input: value,
          args: command.args,
        },
      ]);
    }

    batchingRerenderLocker.flush();

    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp') {
      if (historyRecordPointerRef.current > 0) {
        event.preventDefault();
        setValue(history.map(record => record.input)[--historyRecordPointerRef.current]);
      }
    }

    if (event.key === 'ArrowDown') {
      if (historyRecordPointerRef.current < history.length) {
        setValue(history.map(record => record.input)[++historyRecordPointerRef.current]);
      }
    }
  };

  return (
    <div class={css.Root}>
      {history.map((record, index) => (
        <div
          key={index}
          class={css.Line_Block}
        >
          <div class={css.Line}>
            <Prompt />

            <span style="white-space: pre;">{record.input}</span>
          </div>

          <Output
            command={record.command}
            args={record.args}
            history={record.inputHistorySnapshot}
          />
        </div>
      ))}

      <div class={css.Line}>
        <Prompt />

        <TerminalInput
          ref={inputRef}
          value={value}
          onInput={setValue}
          onSubmit={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

function parseCommand(input: string): { name: string; args: string[] } {
  const parts = input.trim().split(/\s+/);

  return {
    name: parts[0] || '',
    args: parts.slice(1),
  };
}
