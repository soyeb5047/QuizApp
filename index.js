const mcq = [
    {
        question : "What is the pH value of the human body?",
        a : "9.2 to 9.8",
        b : "7.0 to 7.8",
        c : "6.1 to 6.3",
        d : "5.4 to 5.6",
        ans : 'ans2'
    },
    {
        question : "Which of the following are called 'Key Industrial animals?' ",
        a : "Producers",
        b : "Tertiary consumers",
        c : "Primary consumers",
        d : "None of these", 
        ans: 'ans3'
    },
    {
        question : "Which of the given amendments made it compulsory for the president to consent to the constitutional Amendment bills?",
        a : "27th",
        b : "29th",
        c : "24th",
        d : "22th",
        ans: "ans3"
    },
    {
        question : "Elections to panchayats in state are regulated by",
        a : "Gram panchayat",
        b : "Nagar Nigam",
        c : "Election Commission of India",
        d : "State Election Commission" ,
        ans : "ans4"
    },

]

// console.log(mcq)

let question = document.querySelector('.question')
let option1 = document.querySelector('#option1')
let option2 = document.querySelector('#option2')
let option3 = document.querySelector('#option3')
let option4 = document.querySelector('#option4')
let submit = document.getElementById('submit')

let getAnswer = document.querySelectorAll('.answer')

let showScore = document.getElementById('showScore')

let questionCount = 0
let score = 0

const loadQuestion = () => {
    let list = mcq[questionCount]
    question.innerText = list.question

    option1.innerText = list.a
    option2.innerText = list.b
    option3.innerText = list.c
    option4.innerText = list.d
}
loadQuestion()

const getAns = () => {
    let answer

    getAnswer.forEach((value) => {
        if(value.checked)
        {
            answer = value.id
        }
    })
    return answer

}

const deselectAll =() => {
    getAnswer.forEach((value) => {
        value.checked = false
    })
}

submit.addEventListener('click', () => {
    let ans = getAns()

    if(ans === mcq[questionCount].ans)
    {
        score++

    }

    questionCount++
    deselectAll()
    if(questionCount < ans.length)
    {
        loadQuestion()
    }
        else
    {
        showScore.innerHTML = `
        <h3>Your Score is ${score} / ${ans.length}⚡</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `

        showScore.classList.remove('scoreArea')
    }
    console.log(ans)
})