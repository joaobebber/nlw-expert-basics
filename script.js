const questions = [
    {
      question: "What is the correct syntax to create a function in JavaScript?",
      answers: [
        "function myFunction() {}",
        "function = myFunction() {}",
        "function: myFunction() {}"
      ],
      correct: 0
    },
    {
      question: "What is the purpose of the 'let' keyword in JavaScript?",
      answers: [
        "To declare a constant variable",
        "To declare a function",
        "To declare a block-scoped variable"
      ],
      correct: 2
    },
    {
      question: "What is the difference between '==' and '===' in JavaScript?",
      answers: [
        "They are the same",
        "'==' checks for equality, while '===' checks for strict equality",
        "'==' checks for strict equality, while '===' checks for equality"
      ],
      correct: 1
    },
    {
      question: "What is the correct way to add an event listener to an element in JavaScript?",
      answers: [
        "element.addEventListener('click', myFunction)",
        "element.addEvent('click', myFunction)",
        "element.on('click', myFunction)"
      ],
      correct: 0
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      answers: [
        "To refer to the current object",
        "To refer to the global object",
        "To refer to the parent object"
      ],
      correct: 0
    },
    {
      question: "What is the correct way to create an array in JavaScript?",
      answers: [
        "const myArray = (1, 2, 3)",
        "const myArray = [1, 2, 3]",
        "const myArray = {1, 2, 3}"
      ],
      correct: 1
    },
    {
      question: "What is the difference between a 'for' loop and a 'while' loop in JavaScript?",
      answers: [
        "A 'for' loop is used for an unknown number of iterations, while a 'while' loop is used for a specific number of iterations",
        "There is no difference between a 'for' loop and a 'while' loop",
        "A 'for' loop is used for a specific number of iterations, while a 'while' loop is used for an unknown number of iterations"
      ],
      correct: 2
    },
    {
      question: "What is the purpose of the 'break' statement in JavaScript?",
      answers: [
        "To stop the execution of a function",
        "To stop the execution of a loop",
        "To stop the execution of a program"
      ],
      correct: 1
    },
    {
      question: "What is the purpose of the 'continue' statement in JavaScript?",
      answers: [
        "To skip the current iteration of a loop",
        "To skip the current iteration of a function",
        "To skip the current iteration of a program"
      ],
      correct: 0
    },
    {
      question: "What is the correct way to import a module in JavaScript?",
      answers: [
        "import myFunction from 'myModule'",
        "import * as myModule from 'myModule'",
        "import { myFunction } from 'myModule'"
      ],
      correct: 2
    }
  ]
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corrects = new Set()
  
  const totalQuestions = questions.length
  
  const showTotal = document.querySelector('#hits span')
  showTotal.textContent = corrects.size + ' of ' + totalQuestions
  
  for (const item of questions) {
    const quizItem = template.content.cloneNode(true)
  
    quizItem.querySelector('h3').textContent = item.question
  
    for (let answer of item.answers) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
  
      dt.querySelector('span').textContent = answer
  
      dt.querySelector('input').setAttribute('name', 'question-' + questions.indexOf(item))
      dt.querySelector('input').value = item.answers.indexOf(answer)
      dt.querySelector('input').onchange = (event) => {
        const isCorrect = event.target.value == item.correct
  
        corrects.delete(item)
  
        if (isCorrect) {
          corrects.add(item)
        }
  
        showTotal.textContent = corrects.size + ' of ' + totalQuestions
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }
  