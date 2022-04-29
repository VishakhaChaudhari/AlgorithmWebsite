const quizdb = [
    {
        question : "Q1 : How many passes does an insertion sort algorithm consist of?",
        a : "N",
        b : "N-1",
        c : "N+1",
        d : "N^2",
        ans : "ans2"
    },
    {
        question : "Q2 : Which of the following algorithm implementation is similar to insertion sort?",
        a : "Binary Heap",
        b : "Quick Sort",
        c : "Merge Sort",
        d : "Selection sort",
        ans : "ans1"
    },
    {
        question : "Q3 : What is the best case time complexity for insertion sort?",
        a : "O(N)",
        b : "O(NlogN)",
        c : "O(logN)",
        d : "O(N^2)",
        ans : "ans1"
    },
    {
        question : "Q4 : What is the worst case time complexity for insertion sort?",
        a : "O(N)",
        b : "O(NlogN)",
        c : "O(logN)",
        d : "O(N^2)",
        ans : "ans4"
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
