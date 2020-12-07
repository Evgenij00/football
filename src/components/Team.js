// import react from 'react'
import { Brand } from './Brand';
import { Players } from './Players';

export const Team = ({logo, name, players}) => {
    return (
        <div className='football-team'>
                <Brand logo={logo} name={name}/>
                <Players players={players}/>
        </div>
    );
}