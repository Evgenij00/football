// import react from 'react'
import { Player } from './Player'

export const Players = ({players}) => {

    const data = players.map((player) => <Player player={player}/>)

    return (
        <ul class="players">
            {data}
        </ul>
    );
}