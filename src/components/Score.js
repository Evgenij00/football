export function Score({score}) {
    return (
        <div className='football-score'>{score[0]}:{score[1]}</div>
    );
}