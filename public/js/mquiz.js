const quizdb = [
    {
        question : "Q1 :Merge sort uses which of the following algorithm to implement sorting ?",
        a : "backtracking",
        b : "greedy algorithm",
        c : "divide and conquer",
        d : "dynamic programming",
        ans : "ans3"
    },
    {
        question : "Q2 : What is avearge case time complexity of standard merege sort?",
        a : "O(nlogn)",
        b : "O(n^2)",
        c : "O(n^2logn)",
        d : "O(logn^2)",
        ans : "ans1"
    },
    {
        question : "Q3 : What is the auxiliary space  complexity of standard merge sort?",
        a : "O(1)",
        b :"O(logn)",
        c : "O(n)",
        d :  "O(nlogn)",
        ans : "ans3"
    },
    {
        question : "Q4 : What is the auxiliary space complexity of bottom up merge sort?",
        a : "O(1)",
        b : "O(n)",
        c : "O(log n)",
        d : "O(n log n)",
        ans : "ans2"
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
