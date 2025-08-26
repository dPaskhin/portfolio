import type { SimpNode } from '@simpreact/simpreact';

interface IProps {
  args: string[];
}

export function EchoOutput(props: IProps): SimpNode {
  return props.args.join(' ');
}
