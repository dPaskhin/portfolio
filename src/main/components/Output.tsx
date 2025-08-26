import type { SimpNode } from '@simpreact/simpreact';
import { WelcomeOutput } from './WelcomeOutput.tsx';
import { HelpOutput } from './HelpOutput.tsx';
import { EchoOutput } from './EchoOutput.tsx';
import { AboutOutput } from './AboutOutput.tsx';
import { EmailOutput } from './EmailOutput.tsx';
import { HistoryOutput } from './HistoryOutput.tsx';
import { ThemesOutput } from './ThemesOutput.tsx';

interface IProps {
  command: string;
  args?: string[];
  history?: string[];
}

export function Output(props: IProps): SimpNode {
  const { command, args, history } = props;

  switch (command) {
    case 'welcome':
      return <WelcomeOutput />;
    case 'help':
      return <HelpOutput />;
    case 'echo':
      return <EchoOutput args={args!} />;
    case 'about':
      return <AboutOutput />;
    case 'email':
      return <EmailOutput />;
    case 'history':
      return <HistoryOutput history={history!} />;
    case 'themes':
      return <ThemesOutput args={args!} />;
    default:
      if (command) {
        return 'command not found: ' + command;
      }
  }
}
