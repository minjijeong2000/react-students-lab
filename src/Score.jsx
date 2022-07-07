const Score = (props) => {
    return (
        <>
        {props.scores.map(score => 
            <>Score:{score.score}<br/>Date:{score.date}<br/></>
            )}
        </>

    )
}

export default Score