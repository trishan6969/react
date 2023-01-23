const Questions = (props) => {
    let { questions, title } = props
    return (
        <div className='questions'>
            <h3 className="heading-questions">{title}</h3>
            {questions.map((q) => (
                <div className="question-and-answer" key={q.id}>
                    <p className="question">{q.question}</p>
                    <p className="answer">{q.answer}</p>
                </div>
            ))}
        </div>
    )
}

export default Questions;