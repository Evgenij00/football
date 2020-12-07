// import react from 'react'
import { Player } from './Player'

export const Players = ({players}) => {

    const data = players.map((player) => <Player player={player}/>)

    return (
        <ul className='players'>
            {data}
        </ul>
    );
}