const quizdb = [
    {
        question : "Q1 : What is the average running time of a quick sort algorithm ?",
        a : "O(N^2)",
        b : "O(N)",
        c : "O(N log N)",
        d : "O(log N)",
        ans : "ans3"
    },
    {
        question : "Q2 : What is the worst case time complexity of a quick sort algorithm ?",
        a : "O(N)",
        b : "O(N log N)",
        c : "O(N^2)",
        d : "O(log N)",
        ans : "ans3"
    },
    {
        question : "Q3 : Which of the following sorting algorithm is the fastest?",
        a : "Merge sort",
        b : "Quick sort",
        c : "Insertion Sort",
        d :  "Shell sort",
        ans : "ans2"
    },
    {
        question : "Q4 : What is the following methods is the most effective for picking the pivot element ?",
        a : "First element",
        b : "Last element",
        c : "median_of_three partitioning",
        d : "random element",
        ans : "ans3"
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
