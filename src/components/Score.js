// import react from 'react'

import {data} from '../data'

export const Score = () => {
    return (
        <div class="footbal-score">{data.score[0]}:{data.score[1]}</div>
    );
}