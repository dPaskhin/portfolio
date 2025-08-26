import type { SimpNode } from '@simpreact/simpreact';

interface IProps {
  history: string[];
}

export function HistoryOutput(props: IProps): SimpNode {
  if (props.history.length === 0) {
    return null;
  }

  return (
    <div>
      {props.history.map(record => (
        <div>{record}</div>
      ))}
    </div>
  );
}
