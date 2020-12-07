// import react from 'react'

import {data} from '../data'

export const Score = () => {
    return (
        <div className='football-score'>{data.score[0]}:{data.score[1]}</div>
    );
}