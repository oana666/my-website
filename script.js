const questions =[
    {
        question:"Pentru ce a fost conceput robotul umanoid TOPIO?",
        answers:[
            
                {text:"Pentru a juca baschet",correct:false},
                {text:"Pentru a gati",correct:false},
                {text:"Pentru a rezolva probleme de matematica",correct:false},
                {text:"Pentru a juca ping-pong",correct:true},

    
            
        ]
        
    },
    {
        question:"Cate continente exista pe Terra?",
        answers:[
            
                {text:"4",correct:false},
                {text:"7",correct:true},
                {text:"3",correct:false},
                {text:"6",correct:false},

    
            
        ]
    },
    {
        question:"Care este valoarea lui numarului pi?",
        answers:[
            
                {text:"3,15",correct:false},
                {text:"2,45",correct:false},
                {text:"3,14",correct:true},
                {text:"e",correct:false},

    
            
        ]
    },
    {
        question:"Ce culoare are soarele?",
        answers:[
            
                {text:"Galben",correct:false},
                {text:"Portocaliu",correct:false},
                {text:"Alb ",correct:true},
                {text:"Rosu",correct:false},

    
            
        ]
    },
    {
        question:"Ce tara este supranumita Tara cimitirelor?",
        answers:[
            
                {text:"Anglia",correct:false},
                {text:"Rusia",correct:false},
                {text:"Romania ",correct:false},
                {text:"Egipt",correct:true},

    
            
        ]
    },
    {
        question:"Cate muchii are un graf neorientat complet?",
        answers:[
            
                {text:"n*(n-1)/2",correct:true},
                {text:"2*n",correct:false},
                {text:"n/2 ",correct:false},
                {text:"n*(n-1)/2",correct:false},

    
            
        ]
    },
    {
        question:"Care este singura tara din lume cu 3 capitale?",
        answers:[
            
                {text:"Africa de Sud",correct:true},
                {text:"Rusia",correct:false},
                {text:"America de Nord ",correct:false},
                {text:"Brazilia",correct:false},

    
            
        ]
    },
    {
        question:"Care este moneda oficiala a Japoniei?",
        answers:[
            
                {text:"Lira",correct:false},
                {text:"Euro",correct:false},
                {text:"Yen ",correct:true},
                {text:"Dolar",correct:false},

    
            
        ]
    },
    {
        question:"Cate zile are un an bisect?",
        answers:[
            
                {text:"365",correct:false},
                {text:"366",correct:true},
                {text:"364 ",correct:false},
                {text:"367",correct:false},

    
            
        ]
    },
    {
        question:"Cate muchii are un arbore cu 4 noduri?",
        answers:[
            
                {text:"2",correct:false},
                {text:"4",correct:false},
                {text:"3 ",correct:true},
                {text:"1",correct:false},

    
            
        ]
    },
    {
        question:"Care este formula pentru Suma Gauss?",
        answers:[
            
                {text:"n*(n+1)/2",correct:true},
                {text:"2*n",correct:false},
                {text:"n ",correct:false},
                {text:"n*(n-1)/2",correct:false},

    
            
        ]
    },

    {
        question:"Care este capitala Canadei?",
        answers:[
            
                {text:"Montreal",correct:false},
                {text:"Ottawa",correct:true},
                {text:"New-York ",correct:false},
                {text:"Male",correct:false},

    
            
        ]
    }

];
const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion()
{ resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>{
    const button =document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct)
    {
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);

    }
           )
}
function resetState()
{
    nextButton.style.display="none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
function selectAnswer(e)
{
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct=="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    }
        );
        nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`Ai obtinut ${score} puncte din ${questions.length}!`;
    nextButton.innerHTML="Joaca din nou";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
        {showQuestion();}
    else
    {
        showScore();
    }
}
nextButton.addEventListener("click",()=>
{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }
    else
    {
        startQuiz();

    }
});


startQuiz();