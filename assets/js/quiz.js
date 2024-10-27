const questions = [
    { question: "What was the event that Marty stopped from happening when he went back to 1955?", choices: ["The invention of the puffer jacket", "George McFly getting hit by a car", "The invention of the Coco Puffs"], answer: 1 },
    { question: "What is Doc's dog's name?", choices: ["Einstein", "Buddy", "Max"], answer: 0 },
    { question: "What date did Marty McFly travel from?", choices: ["October 15, 1986", "November 05, 1987", "October 16, 1985"], answer: 2 },
    { question: "How many miles per hour does the car have to go in order for time travel to be possible?", choices: ["88 mph", "121 mph", "85 mph"], answer: 0 },
    { question: "What is the name of Marty's band?", choices: ["The Arrowheads", "The Pinheads", "The Gearheads"], answer: 1 }
];

let currentQuestion = 0;
let score = 0;
let incorrectQuestions = [];

function displayQuestion() {
    const questionContainer = document.getElementById("question");
    const choicesContainer = document.getElementById("choices");
    const currentQ = questions[currentQuestion];

    // Display question
    questionContainer.innerText = currentQ.question;
    
    // Clear previous choices
    choicesContainer.innerHTML = "";

    // Display choices as buttons
    currentQ.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.onclick = () => checkAnswer(index);
        choicesContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score++;
    } else {
        incorrectQuestions.push(currentQuestion + 1);
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("score").innerText = `Your score: ${score}/${questions.length}`;
    document.getElementById("score").style.display = "block";
    document.getElementById("restart-button").style.display = "block";
    
    if (incorrectQuestions.length > 0) {
        document.getElementById("missed-questions").innerText = `You got questions ${incorrectQuestions.join(", ")} wrong.`;
    } else {
        document.getElementById("missed-questions").innerText = "Perfect score! You didn't miss any questions.";
    }
    document.getElementById("missed-questions").style.display = "block";
}

function startQuiz() {
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("score").style.display = "none";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("restart-button").style.display = "none";
    document.getElementById("missed-questions").style.display = "none";

    currentQuestion = 0;
    score = 0;
    incorrectQuestions = [];
    displayQuestion();
}
