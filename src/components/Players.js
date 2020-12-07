import { Player } from './Player'

export function Players({players}) {

    const data = players.map((player) => <Player player={player} key={player.number}/>)

    return (
        <ul className='players'>
            {data}
        </ul>
    );
}