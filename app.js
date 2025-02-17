// // step 1 define quiz data

// const quizData =[
//     {
//         question : "what does HTML Stand for?",
//         options: [
//             "Hyper text markup language"
//             "Hyper transfer markup language"
//             "Hypertext text markup language"
//             "Hyperlink text markup language"
//         ],
//         correct: 0 ,

//     },
// {
//     question:
//     " In what year did the Great October Socialist Revolution take place?"
//     option:["1917", "1923", " 1914" ,"1920"]
//     Correct Answer: 1,

// },

// {
// question:
// "What is the largest lake in the world?"
// option:["Caspian Sea","Baikal","Lake Superior"," Ontario"]

// Correct Answer:2,
// },

// {
//     question:"What is the lowest IQ country?"
//     option:["Nepal","Pakistan","Amrica,","Srilanka"]

//     Correct Answer:1,

// },

// ];

// //step2

// const answerElm = document.querySelectorAll(".answer");
// const [questionElm, option_1,option_2,option_3,option_4,]= 
// document.querySelector(
//     "#question, .option_1, .option_2, .option_3, .option_4,"
// );
// const submitBtn = document.querySelector("submit");

// const currentQuiz = 0;
// const score = 0;

// //Step 3 load quiz fucntion

// const loadQuiz = ()  {
//     const {question,options} = quizData[currentQuiz];
//     console.log('question');

//     questionElm.innerText = question
// };

// loadQuiz();

const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            console.log(this.value)
            this.value = ""
        }
    }
)

const addToDo = (item)=> {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      $(item)
        <i class="fas fa-times"> </i>
       `;

       listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
       )

   toDoBox.appendChild(listitem);

}





