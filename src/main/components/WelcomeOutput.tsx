import type { SimpElement } from '@simpreact/simpreact';
import css from './WelcomeOutput.module.css';

export function WelcomeOutput(): SimpElement {
  return (
    <div>
      <div class={css.Banner}>
        {`    ____  __  _________________  ________   ____  ___   _____ __ __ __  _______   __
   / __ \\/  |/  /  _/_  __/ __ \\/  _/  _/  / __ \\/   | / ___// //_// / / /  _/ | / /
  / / / / /|_/ // /  / / / /_/ // / / /   / /_/ / /| | \\__ \\/ ,<  / /_/ // //  |/ / 
 / /_/ / /  / // /  / / / _, _// /_/ /   / ____/ ___ |___/ / /| |/ __  // // /|  /  
/_____/_/  /_/___/ /_/ /_/ |_/___/___/  /_/   /_/  |_/____/_/ |_/_/ /_/___/_/ |_/   
`}
      </div>

      <div>Welcome to my terminal portfolio.</div>

      <div class={css.Separator}>----</div>

      <div>
        {"This project's source code can be found in this project's "}
        <a href="https://github.com/dPaskhin/portfolio">GitHub repo</a>.
      </div>

      <div class={css.Separator}>----</div>

      <div>
        For a list of available commands, type `<code>help</code>`.
      </div>
    </div>
  );
}
