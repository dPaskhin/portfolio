import type { SimpNode } from '@simpreact/simpreact';
import { themes } from '../themes.ts';
import { UTFChar } from '../char.ts';

interface IProps {
  args: string[];
}

export function ThemesOutput(props: IProps): SimpNode {
  if (props.args[0] === 'set' && themes.includes(props.args[1])) {
    document.documentElement.setAttribute('data-theme', props.args[1]);
    localStorage.setItem('theme', props.args[1]);
    return 'You have selected `' + props.args[1] + '` theme.';
  }

  return (
    <>
      <div>{themes.join(' ')}</div>
      <br />
      <div>
        Usage: themes set {UTFChar.LT}theme-name{UTFChar.GT} <br />
        eg: themes set ubuntu
      </div>
    </>
  );
}
