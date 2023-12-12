const questions = [
    {
        question: "Bola tangan merupakan cabang olahraga?",
        options: ["invasi", "Permainan net", "permainan bola kecil", "Permainan air"],
        correctAnswer: "invasi"
    },
    {
        question: "Permainan bola tangan yang bertugas sebagai penjaga gawang adalah?",
        options: ["kiper", "poros", "gelandang", "penyerang"],
        correctAnswer: "kiper"
    },
    {
        question: "Tujuan utama permainan bola tangan adalah?",
        options: ["menyehatkan badan", "bermain baik", "memasukkan bola ke gawang lawan", "menambah tinggi badan"],
        correctAnswer: "memasukkan bola ke gawang lawan"
    },
    {
        question: "Dalam pertandingan jumlah pemain dalam satu regu adalah",
        options: ["7 orang", "11 orang", "8 orang", "12 orang"],
        correctAnswer: "7 orang"
    },
    {
        question: "Teknik ini dilakukan dengan cara melakukkan dribbling terlebih dahulu yang kemudian menjatuhkan badan ke depan sambil menembak bola dengan posisi akhir dengan badan terlentang dinamakan",
        options: ["jump shot", "standing throw shot", "the fall shot", "the dive shot"],
        correctAnswer: "the fall shot"
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
