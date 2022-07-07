import Score from './Score'

const Student = (props) => {
    return(
        <>
            {props.students.map(student =>
            <>
                <h3>{student.name}</h3>
                <h3>{student.bio}</h3>
                <Score key={student.name} scores={student.scores}/>
                </>
                )}
        </>
    )
}

export default Student