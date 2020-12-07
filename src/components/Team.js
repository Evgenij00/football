import { Brand } from './Brand';
import { Players } from './Players';

export function Team({logo, name, players}) {
    return (
        <div className='football-team'>
                <Brand logo={logo} name={name}/>
                <Players players={players}/>
        </div>
    );
}