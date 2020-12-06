import { Score } from "./components/Score";
import { Team } from "./components/Team";

import psgLogo from './img/PSG-Logo.png'
import bayernLogo from './img/Bayern-Logo.png'
import {data} from './data'

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class='football-team-wrapper'>
            <Team logo={psgLogo} name='PSG' players={data.first.players}/>
            <Score />
            <Team logo={bayernLogo} name='Bayern' players={data.second.players}/>
        </div>
      </div>
    </div>
  );
}

export default App;
