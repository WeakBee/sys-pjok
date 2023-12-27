const questions = [
    {
        question: "Perbedaan antara jalan dengan lari terletak pada?",
        options: ["Cara kaki menapak", "Kecondongan Badan", "Panjang Langkah", "Memasuki Garis Finish"],
        correctAnswer: "Cara kaki menapak"
    },
    {
        question: "Yang tidak diperbolehkan dalam melakukan gerak jalan cepat adalah?",
        options: ["Langkah Panjang", "Langkah melayang", "Langkah Pendek", "Langkah menyilang"],
        correctAnswer: "Langkah melayang"
    },
    {
        question: "Pada gerakan lari cepat posisi kaki harus?",
        options: ["Kedua kaki kontak dengan tanah", "Kedua kaki boleh melayang", "Satu kaki selalu kontak dengan tanah", "tidak ada ketentuan"],
        correctAnswer: "Satu kaki selalu kontak dengan tanah"
    },
    {
        question: "Berikut ini adalah teknik lari cepat, kecuali?",
        options: ["start", "Teknik lari cepat", "finish", "Langkah kaki"],
        correctAnswer: "Teknik lari cepat"
    },
    {
        question: "Start yang digunakan dalam perlombaan jalan cepat adalah?",
        options: ["Start melayang", "Start jongkok", "Start berdiri", "Start berlari"],
        correctAnswer: "Start berdiri"
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
