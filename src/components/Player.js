export function Player({player}) {
    return (
        <li className='player'>
            <div className='player-num'>{player.number}</div>
            <div className='player-name'>{player.name} {player.surname}</div>
        </li>
    );
}