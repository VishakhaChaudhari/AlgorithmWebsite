const quizdb = [
    {
        question : "Q1 : What is the best case efficiency of bubble sort in the improvised version?",
        a : "O(nlogn)",
        b : "O(logn)",
        c : "O(n)",
        d : "O(n^2)",
        ans : "ans3"
    },
    {
        question : "Q2 : What is the average case complexity of bubble sort?",
        a : "O(nlogn)",
        b : "O(logn)",
        c : "O(n)",
        d : "O(n^2)",
        ans : "ans4"
    },
    {
        question : "Q3 : What is the worst case complexity of bubble sort?",
        a : "O(nlogn)",
        b : "O(logn)",
        c : "O(n)",
        d :  "O(n^2)",
        ans : "ans4"
    },
    {
        question : "Q4 : The given array is arr={1,2,4,3}. Bubble sort is used to sort the array elements .How many iterations will  be done to sort the array?",
        a : "4",
        b : "2",
        c : "1",
        d : "0",
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



