const questions = [
    {
        question: "Lama permainan sepak bola adalah",
        options: ["1 x 45 menit", "2 x 45 menit", "3 x 45 menit", "4 x 45 menit"],
        correctAnswer: "2 x 45 menit"
    },
    {
        question: "Jumlah pemain sepak bola adalah?",
        options: ["7", "9", "10", "11"],
        correctAnswer: "11"
    },
    {
        question: "Induk organisasi sepak bola Nasional Indonesia adalah?",
        options: ["PSSI", "PSIS", "PBSI", "PRSI"],
        correctAnswer: "PSSI"
    },
    {
        question: "Pemain seoak bola yang bertugas sebagai penjaga gawang adalah?",
        options: ["kiper", "poros", "gelandang", "penyerang"],
        correctAnswer: "kiper"
    },
    {
        question: "Anggota badan yang tidak diperbolehkan untuk digunakan dalam bermain sepak bola adalah",
        options: ["Tangan", "Paha", "Kaki", "Dada"],
        correctAnswer: "Tangan"
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
