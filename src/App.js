import { Score } from "./components/Score";
import { Team } from "./components/Team";

import psgLogo from './img/PSG-Logo.png'
import bayernLogo from './img/Bayern-Logo.png'

import {data} from './data'

import './App.css'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='football-team-wrapper'>
            <Team logo={psgLogo} name={data.first.name} players={data.first.players}/>
            <Score score={data.score}/>
            <Team logo={bayernLogo} name={data.second.name} players={data.second.players}/>
        </div>
      </div>
    </div>
  );
}

export default App;
