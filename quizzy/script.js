
const questions = {
  easy: [
    { question: "What color is the sky on a clear day?", options: ["Red", "Blue", "Green", "Yellow"], correct: 1 },
    { question: "What is the capital of France?", options: ["Rome", "Madrid", "Paris", "Berlin"], correct: 2 },
    { question: "How many legs does a spider have?", options: ["6", "8", "10", "12"], correct: 1 },
    { question: "What is the opposite of hot?", options: ["Cold", "Warm", "Cool", "Chilly"], correct: 0 },
    { question: "Which animal is known as the 'King of the Jungle'?", options: ["Tiger", "Elephant", "Lion", "Cheetah"], correct: 2 },
  ],
  medium: [
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 2 },
    { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Pepper", "Onion"], correct: 1 },
    { question: "How many players are on a soccer team?", options: ["7", "9", "11", "13"], correct: 2 },
    { question: "In which city is the Statue of Liberty located?", options: ["New York", "Los Angeles", "Chicago", "San Francisco"], correct: 0 },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Pb"], correct: 0 },
  ],
  hard: [
    { question: "What is the capital of Iceland?", options: ["Reykjavik", "Oslo", "Copenhagen", "Helsinki"], correct: 0 },
    { question: "Who developed the first successful polio vaccine?", options: ["Louis Pasteur", "Jonas Salk", "Edward Jenner", "Albert Sabin"], correct: 1 },
    { question: "Which element has the atomic number 1?", options: ["Helium", "Hydrogen", "Oxygen", "Carbon"], correct: 1 },
    { question: "In which year did the Berlin Wall fall?", options: ["1987", "1988", "1989", "1990"], correct: 2 },
    { question: "What is the capital city of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: 2 },
  ],
};

let questionIndex = 0, userScore = 0, quizQuestionsSet;

function initiateQuiz(level) {
    difficultyLevel = level;
    quizQuestionsSet = questions[level];
    questionIndex = 0;
    userScore = 0;

    document.getElementById('difficulty-selection').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    displayQuestion();
}


function displayQuestion() {
    const currentQuestion = quizQuestionsSet[questionIndex];
    document.getElementById('question-number').innerText = `Question ${questionIndex + 1} of ${quizQuestionsSet.length}`;
    document.getElementById('question-text').innerText = currentQuestion.question;

    const optionsArea = document.getElementById('options-container');
    optionsArea.innerHTML = '';  
    currentQuestion.options.forEach((option, idx) => {
        const choiceButton = document.createElement('button');
        choiceButton.innerText = option;
        choiceButton.onclick = () => chooseAnswer(idx);
        optionsArea.appendChild(choiceButton);
    });
}

let chosenAnswer = null;


function chooseAnswer(idx) {
    chosenAnswer = idx;
}


function submitbtn() {
    if (chosenAnswer === null) {
        alert("Please select an answer.");
        return;
    }

    const correctIndex = quizQuestionsSet[questionIndex].correct;
    const correctOptionText = quizQuestionsSet[questionIndex].options[correctIndex];  

    if (chosenAnswer === correctIndex) {
        userScore++;
        alert("Correct!");
    } else {
        alert(`Incorrect!Answer is: ${correctOptionText}`);
    }

    questionIndex++;
    chosenAnswer = null;

    if (questionIndex < quizQuestionsSet.length) {
        displayQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    document.getElementById('score').innerText = `You got ${userScore} out of ${quizQuestionsSet.length} correct.`;
}

function restartQuiz() {
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('difficulty-selection').classList.remove('hidden');
}
