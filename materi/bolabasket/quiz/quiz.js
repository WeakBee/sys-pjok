const questions = [
    {
        question: "Pencipta permainan bola basket adalah?",
        options: ["William Fitzstephen", "James A.Naismith", "James Bond", "William G. Morgan"],
        correctAnswer: "James A.Naismith"
    },
    {
        question: "Satu regu dalam permainan bola basket terdiri dari?",
        options: ["3 orang", "4 orang", "4 orang", "5 orang"],
        correctAnswer: "5 orang"
    },
    {
        question: "Yang tidak termasuk teknik melempar dalam permainan bola basket adalah?",
        options: ["chest pass", "overhead pass", "bounce pass", "dribbling"],
        correctAnswer: "dribbling"
    },
    {
        question: "Bila kita akan mengoper bola kepada teman yang jaraknya jauh, maka lakukan lemparan?",
        options: ["chest pass", "overhead pass", "bounce pass", "baseball pass"],
        correctAnswer: "overhead pass"
    },
    {
        question: "Gerak spesifik memantul-mantulkan bola sambil diam, berjalan, atau berlari dalam permainan bola basket adalah",
        options: ["melempar/mengoper bola", "menggiring bola", "memegang bola", "menangkap bola"],
        correctAnswer: "menggiring bola"
    },
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = $("#question-container");
    const optionsContainer = $("#options-container");
    const currentQuestionData = questions[currentQuestion];

    questionContainer.text(currentQuestionData.question);
    optionsContainer.empty();

    currentQuestionData.options.forEach((option, index) => {
        const radioBtn = $(`<input type="radio" name="option" value="${option}" id="option${index}">`);
        const label = $(`<label for="option${index}" class="cursor-pointer">${option}</label>`);
    
        optionsContainer.append(radioBtn, label);
    });
}

function checkAnswer() {
    const selectedOption = $("input[name='option']:checked").val();
    if (selectedOption === questions[currentQuestion].correctAnswer) {
        score++;
    }
}

function showResult() {
    const resultContainer = $("#result-container");
    resultContainer.text(`Kamu Benar: ${score} dari ${questions.length} Soal`);
    $("#submit-btn").hide();
    $("#done-btn").show();

    // Optionally, you can add logic to display a message based on the score
}

$(document).ready(function() {
    $("#done-btn").hide();
    loadQuestion();

    $("#submit-btn").click(function() {
        checkAnswer();
        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    });
});
