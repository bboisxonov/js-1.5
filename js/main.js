// Finding the longest word-----------------------------------------------------------------------

// // Getting DOM elements
// let elInput = document.querySelector(".site_input")
// let elResultLongestWord = document.querySelector(".result")
// let elButtonResult = document.querySelector('.input_result-btn')

// //Event start
// elButtonResult.addEventListener('click', () => {
//     let eachInputWord = elInput.value.split(" ")
//     var longestWord = ""

// //Checking every word with Loop
//     for(let i = 0; i < eachInputWord.length; i++){
//         if (eachInputWord[i].length >= longestWord.length){
//             longestWord = eachInputWord[i]
//         }
//     }
// //Showing the Result
//     elResultLongestWord.textContent =` ${longestWord} is the longest word with ${longestWord.length} elements`
// })




// Calculating all numbers-----------------------------------------------------------------------


// // Getting DOM elements
// let elInput = document.querySelector(".site_input")
// let elResultLongestWord = document.querySelector(".result")
// let elButtonResult = document.querySelector('.input_result-btn')

// //Event start
// elButtonResult.addEventListener('click', () => {
//     let eachInputNumber = elInput.value.split(" ")
//     let sum = 0

//     for(let i = 0; i < eachInputNumber.length; i++){
//         sum = Number(eachInputNumber[i]) + sum
//     } 
//     elInput.value = ""

//     elResultLongestWord.textContent = sum

//     if(elResultLongestWord.textContent == 'NaN'){
//         elResultLongestWord.textContent = 'Please enter a number!'
//     }


// })



// Adding to dos ------------------------------------------------------------------------------

// // Getting DOM elements
// let elTodoInput = document.querySelector(".todo_input")
// let elTodoBtn = document.querySelector(".todo-btn")
// let elTodoList = document.querySelector('.todo_list')

// let todoList = []

// elTodoBtn.addEventListener('click', () => {
//     todoList.push(elTodoInput.value)
    
//     for(let i = 0; i < todoList.length; i++){
//         var todoItem = document.createElement('li')
//         todoItem.textContent = todoList[i]
//         elTodoInput.value = ""
//     }
//     if(todoItem.textContent == ""){
//         return
//     }else{
//         elTodoList.appendChild(todoItem)
//     }
// })