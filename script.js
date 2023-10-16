// const questions = [
//     {
//         question:  "How many 2's appear in 1-100?",
//         Answer:[
//             {text:"10",correct:false},
//             {text:"25",correct:false},
//             {text:"50",correct:false},
//             {text:"20",correct:true},
            
//         ]
//     },
//     {
//         question:  "what number is next,2,4,14,22,32?",
//         Answer:[
//             {text:"44",correct:true},
//             {text:"16",correct:false},
//             {text:"56",correct:false},
//             {text:"60",correct:false},
            
//         ]
//     },
//     {
//         question:  "What day will be tomorrow if Wednesday is three days ago?",
//         Answer:[
//             {text:"Monday",correct:false},
//             {text:"Saturday",correct:false},
//             {text:"Sunday",correct:true},
//             {text:"Friday",correct:false},
            
//         ]
//     },
//     {
//         question:  "Which word is the Odd one?",
//         Answer:[
//             {text:"glossary",correct:false},
//             {text:"index",correct:false},
//             {text:"book",correct:true},
//             {text:"chapter",correct:false},
            
//         ]
//     },
//     {
//         question:  "Which word would be third in Alphabatic order?",
//         Answer:[
//             {text:"thread",correct:false},
//             {text:"thrill",correct:true},
//             {text:"thrive",correct:false},
//             {text:"thrice",correct:false},
            
//         ]
//     },
//     {
//         question:  "Which one is the Odd one?",
//         Answer:[
//             {text:"foundness",correct:false},
//             {text:"sadness",correct:true},
//             {text:"happiness",correct:false},
//             {text:"hope",correct:false},
            
//         ]
//     },
//     {
//         question:  "Which of the following is not the Primary colour?",
//         Answer:[
//             {text:"red",correct:false},
//             {text:"orange",correct:true},
//             {text:"blue",correct:false},
//             {text:"green",correct:false},
            
//         ]
//     },
//     {
//         question:  "Which is the number one selling toy in the World?",
//         Answer:[
//             {text:"rubik's cube",correct:true},
//             {text:"barbie",correct:false},
//             {text:"spinning top",correct:false},
//             {text:"teddy bear",correct:false},
            
//         ]
//     },
//     {
//         question:  "Where is the spice park in Kerala?",
//         Answer:[
//             {text:"wayanad",correct:false},
//             {text:"idukki",correct:true},
//             {text:"palakkad",correct:false},
//             {text:"malappuram",correct:false},
            
//         ]
//     },
//     {
//         question:  "The constituent Assembly adopted national flag on?",
//         Answer:[
//             {text:"1947,July22",correct:true},
//             {text:"1947,June22",correct:false},
//             {text:"1947,January26",correct:false},
//             {text:"1947,August15",correct:false},
            
//         ]
//     }
    
// ];

// const QuestionElement =document.getElementById("Question");
// const answerButtons =document.getElementById("answer-buttons");
// const nextButton =document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "NEXT";
//     ShowQuestion();
    
// }

// function ShowQuestion(){
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//      QuestionElement.innerHTML = questionNo + ". "+ currentQuestion.question;
//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click",selectAnswer);
//     });
// }


// function resetState() {
//     nextButton.style.dispaly ="none";
//     while (answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
//     }

//     function selectAnswer(e){
//         const selectedBtn = e.target;
//         const isCorrect = selectedBtn.dataset.correct === "true";
//         if(isCorrect){
//             selectedBtn.classList.add("correct");
//             score++;
//         }else{
//             selectedBtn.classList.add("incorrect");
//         }
//         Array.from(answerButtons.children).forEach(button =>{
//             if (button.dataset.correct === "true"){
//                 button.classList.add("correct");
//             }
//             button.disabled = true;
//          });
//          nextButton.style.display = "block";
//         }

//         function showScore() {
//             resetState();
//             QuestionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
//             nextButton.innerHTML = "playAgain";
//             nextButton.style.display = "block"
//         }

//         function handleNextButton() {
//             currentQuestionIndex++;
//             if (currentQuestionIndex < questions.length) {
//                 ShowQuestion();
//             }else{
//                 showScore();
//             }
//         }

//         nextButton.addEventListener("click",()=> {
//             if (currentQuestionIndex < questions.length){
//                 handleNextButton();
//             }else{
//                 startQuiz();
//             }
//         });
//         startQuiz();

const questions = [
    {
        question: "How many 2's appear in 1-100?",
        answers:[
            { text:"10",correct: false},
             { text:"25",correct: false},
              { text:"50",correct: false},
               { text:"20",correct: true},
        ]
        
    },
    {
    
    question: "What number is next,2,4,14,22,32?",
    answers:[
            { text:"44",correct: true},
             { text:"16",correct: false},
              { text:"56",correct: false},
               { text:"60",correct: false},
        ]
        },
        {
        
    question: "what day will be tomorrow if wednesday is three days ago?",
    answers:[
            { text:"Monday",correct: false},
             { text:"Saturday",correct: false},
              { text:"sunday",correct: true},
               { text:"friday",correct: false},
        ]
        
    },
    {
    question: "Which word is the Odd One?",
    answers:[
            { text:"glossary",correct: false},
             { text:"index",correct: false},
              { text:"chapter",correct: false},
               { text:"book",correct: true},
        ]
      }, 
     {
question:"Which word would be third in Alphabatic order?",
    answers:[
            { text:"thread",correct: false},
             { text:"thrive",correct: false},
              { text:"thrice",correct: false},
               { text:"thrill",correct: true},
        ]
        },
        {
question:"Which one is the odd one?",
answers:[
            { text:"fondness",correct: false},
             { text:"happiness",correct: 
             false},
              { text:"hope",correct: false},
               { text:"sadness",correct: true},
        ]
        },
        {
question: "Which of the following is not a primary color?",
answers:[
            { text:"red",correct: false},
             { text:"orange",correct: true},
              { text:"blue",correct: false},
               { text:"green",correct: false},
        ]
        },
        {
question: "Which is the number one selling toy in the world?",
answers:[
            { text:"rubik's cube",correct: true},
             { text:"barbie",correct: false},
              { text:"spinning top",correct: false},
               { text:"teddy bear",correct: false},
        ]
        },
        {
question:"where is the first spice park in kerala?",
answers:[
            { text:"wayanad",correct: false},
             { text:"malappuram",correct: false},
              { text:"idukki",correct: true},
               { text:"palakad",correct: false},
        ] 
        },
        {
question: "Constituent Assembly adopted national flag on?",
answers:[
            { text:"1947 july22",correct: true},
             { text:"1947 june22",correct: false},
              { text:"1947 january28",correct: false},
               { text:"1947 August15",correct: false},
        ] 
        }
    ];
    

const questionElement = document.getElementById("Question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
