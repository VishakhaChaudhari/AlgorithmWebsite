const quizdb = [
    {
        question : "Q1 : Linear search(recursive)  algorithm used in ?",
        a : "When the size of the dataset is low ",
        b : "When the size of the dataset is large",
        c : "When the dataset is unordered",
        d : "Never used",
        ans : "ans1"
    },
    {
        question : "Q2  :What is the recurrence relation for the linear search recursive algorithm ?",
        a : "T(n-2)+c",
        b : "2T(n-1)+c",
        c : "T(n-1)+c",
        d : "T(n+1)+c",
        ans : "ans3"
    },
    {
        question : "Q3 :What is the best case runtime of linear search(recursive) algorithm on an ordered set of elements ?",
        a : "O(1)",
        b : "O(n)",
        c : "O(logn)",
        d : "O(nx)",
        ans : "ans1"
    },
    {
        question : "Q4 :What is the worst case runtime of linear search(recursive) algorithm ?",
        a : "O(n)",
        b : "O(logn)",
        c : "O(n^2)",
        d : "O(nx)",
        ans : "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const showScore = document.querySelector("#showScore")

const answers = document.querySelectorAll('.answer');
let questionCount =0;
let score = 0;
const loadQuestion =()=>{
    const qustionList = quizdb[questionCount];
    question.innerText = qustionList.question;
    option1.innerText = qustionList.a;
    option2.innerText = qustionList.b;
    option3.innerText = qustionList.c;
    option4.innerText = qustionList.d;


    console.log(quizdb[0].option1);
} 
loadQuestion();

const getCheckAnswer =()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
        
    });
    return answer;
};
const deselectAll = ()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false);
}
      

submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizdb[questionCount].ans){
        score++;
    }
    questionCount++;
    deselectAll();
    if(questionCount < quizdb.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizdb.length}</h3>
        <button class="btn" onClick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});



