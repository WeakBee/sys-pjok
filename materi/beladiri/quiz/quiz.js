const questions = [
    {
        question: "Di bawah ini adalah salah satu teknik dasar dalam permainan bola voli",
        options: ["Passing dada", "mengontrol bola", "servis", "backhand"],
        correctAnswer: "servis"
    },
    {
        question: "Pada waktu bola datang, bola didorong dengan jari-jari tangan dan perkenaannya melalui ruas pertama dan kedua dari jari telunjuk sampai kelingking, sedangkan ibu jari hanya pada ruas pertama saja, teknik ini merupakan gerakan?",
        options: ["servis", "smash", "passing bawah", "passing atas"],
        correctAnswer: "passing atas"
    },
    {
        question: "Teknik dasar untuk memulai permainan bolavoli adalah?",
        options: ["Passing bawah", "Passing atas", "Smash", "Servis"],
        correctAnswer: "Servis"
    },
    {
        question: "Teknik memukul bola sambil meloncat dekat net sekuat-kuatnya dengan maksud untuk mematikan permainan lawan disebut?",
        options: ["servis", "smash", "passing", "block"],
        correctAnswer: "smash"
    },
    {
        question: "Gerakan memukul bola sambil meloncat dekat net menggunakan gerak tipu dengan maksud untuk mematikan permainan lawan disebut",
        options: ["spike", "smash", "passing", "block"],
        correctAnswer: "spike"
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
