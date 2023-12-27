const questions = [
    {
        question: "Gerak spesifik dalam pencak silat yang digunakan sebagai dasar untuk sikap menyerang atau bertahan adalah",
        options: ["Tendangan", "Pukulan", "Hindaran", "Kuda-kuda"],
        correctAnswer: "Kuda-kuda"
    },
    {
        question: "Posisi badan menghadap ke depan dengan kaki dibuka selebar bahu dan kedua lengan berada di samping pinggang merupakan gerak kuda-kuda",
        options: ["depan", "samping", "tengah", "samping"],
        correctAnswer: "tengah"
    },
    {
        question: "Perubahan posisi kaki dari suatu tempat ke tempat lainnya dinamakan",
        options: ["geseran", "lompatan", "pola langkah", "loncatan"],
        correctAnswer: "pola langkah"
    },
    {
        question: "Cara memindahkan sasaran dari arah serangan dalam pencak silat dinamakan",
        options: ["Serangan", "Pembelaan", "Tangkisan", "Elakan"],
        correctAnswer: "Elakan"
    },
    {
        question: "Cara pembelaan dengan mengadakan kontak langsung dengan lawan dinamakan",
        options: ["Serangan", "Pembelaan", "Tangkisan", "Elakan"],
        correctAnswer: "Tangkisan"
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
