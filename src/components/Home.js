import { useState } from 'react'
import Questions from './Questions'

const questionsArr = [
    {
        question: "What is the difference between .map() and .forEach()?",
        answer: ".map() returns a new array, .forEach() does not",
        id: 1
    },
    {
        question: "What is the purpose of destructuring?",
        answer: "To extract data from arrays or objects into individual variables",
        id: 2
    },
    {
        question: "What is the purpose of the reduce() method?",
        answer: "To reduce an array to a single value",
        id: 3
    }
]

const Home = () => {
    let [questions] = useState(questionsArr)

    const printName = (name) => {
        console.log(`Hello, your name is ${name} and you just clicked the button`)
    }
    const printMsg = (e) => {
        e.stopPropagation()
        console.log('Hello, You just clicked the second button')
    }

    document.body.addEventListener('click', () => {
        console.log('Body - Why are you clicking me?')
    })

    let [nameOfPerson, setName] = useState('Trishan')
    let [letters, setLetters] = useState(7)
    const changeName = (e) => {
        e.stopPropagation()
        setName('Wagle')
        setLetters(5)
    }

    return (
        <>
            <p className="para">{nameOfPerson} has {letters} letters</p>
            <div className="buttons">
                <button className="btn" onClick={(e) => {
                    e.stopPropagation()
                    printName('Trishan')
                }}>Click Me</button>
                <button className="btn" onClick={printMsg}>Click Me Again</button>
                <button className="btn" onClick={changeName}>Change Name</button>
            </div>
            <Questions questions={questions} title='Some JS QNAs' />
        </>
    )
}

export default Home