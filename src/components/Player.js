import react from 'react'

export const Player = ({player}) => {
    return (
        <li class="player">
            <div class="player-num">{player.number}</div>
            <div class="player-name">{player.name} {player.surname}</div>
        </li>
    );
}