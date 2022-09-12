const quizQuestion = [
    {
        question: 'HTML full form !',
        a: 'Hypertext Markup Language',
        b: 'Hahaha',
        c: 'Hahaha',
        d: 'Hahaha',
        right: 'ans1'
    },
    {
        question: 'HTML full a !',
        a: 'Hypertext Markup Language',
        b: 'Hahaha',
        c: 'Hahaha',
        d: 'Hahaha',
        right: 'ans3'
    },
    {
        question: 'HTML full b !',
        a: 'Hypertext Markup Language',
        b: 'Hahaha',
        c: 'Hahaha',
        d: 'Hahaha',
        right: 'ans2'
    },
];

const question = document.querySelector('.question');
const option1  = document.querySelector('#option1');
const option2  = document.querySelector('#option2');
const option3  = document.querySelector('#option3');
const option4  = document.querySelector('#option4');
const answers  = document.querySelectorAll('.answer');

const submit  = document.querySelector('#submit');
const showScore  = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    let list = quizQuestion[questionCount];
    question.innerHTML = list.question;
    option1.innerHTML = list.a;
    option2.innerHTML = list.b;
    option3.innerHTML = list.c;
    option4.innerHTML = list.d;
}

loadQuestion();

function getCheckedAnswer() {
    let ans;
    answers.forEach((i) => {
        if(i.checked) {
            ans = i.id;
        }
    })
    return ans;
}

const uncheckedAnswer = () => {
    answers.forEach((i) => {
        i.checked = false;
    });
}

submit.addEventListener('click', () => {
    const x = getCheckedAnswer();
    if(x === quizQuestion[questionCount].right) {
        score++;
        // console.log('benar!');
    }
    questionCount++;
    uncheckedAnswer();

    if(questionCount < quizQuestion.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `<h3 class="h3">Your score is ${score} / ${quizQuestion.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`;
        showScore.classList.remove('score');
    }
})