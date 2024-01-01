const questions = [
    {
        question: "Senam yang dilakukan dengan irama music disebut",
        options: ["Senam ketangkasan", "Senam irama", "senam dasar", "senam lantai"],
        correctAnswer: "Senam irama"
    },{
        question: "Senam Ritmik disebut juga",
        options: ["senam irama", "senam SKJ", "senam aerobik", "senam iringan"],
        correctAnswer: "senam irama"
    },{
        question: "Berikut ini adalah gerakan senam irama, kecuali",
        options: ["meloncat", "melangkah", "merangkak", "berjalan"],
        correctAnswer: "merangkak"
    },{
        question: "Keluwesan melakukan gerakan dalam senam irama disebut",
        options: ["kontinuitas", "fleksibilitas", "keseimbangan", "ketepatan irama"],
        correctAnswer: "fleksibilitas"
    },{
        question: "Senam ritmik dapat dibagi menjadi dua yaitu",
        options: ["lantai dan ketangkasan", "cepat dan lambat", "alat dan tanpa alat", "kebugaran dan aerobik"],
        correctAnswer: "alat dan tanpa alat"
    },{
        question: "Gerakan senam irama disesuaikan dengan",
        options: ["ayunan lengan", "ayunan kaki", "langkah kaki", "irama yang mengiringnya"],
        correctAnswer: "irama yang mengiringnya"
    },{
        question: "Induk organisasi dari senam adalah",
        options: ["PRSI", "PERSANI", "PERBASI", "PERPANI"],
        correctAnswer: "PERSANI"
    },{
        question: "Berikut ini yang bukan merupakan unsur dalam gerak spesifik gerkan senam irama adalah",
        options: ["keseimbangan", "fleksibilitas", "kontinuitas", "ketepatan irama"],
        correctAnswer: "keseimbangan"
    },{
        question: "Istilah lain dari pola langkah ke depan dalam senam irama disebut",
        options: ["loopaas", "bijtrekpaas", "zijpas", "galopaas"],
        correctAnswer: "galopaas"
    },{
        question: "zijpas dalam senam irama disebut juga",
        options: ["langkah silang", "langkah samping", "langkah depan", "langkah biasa"],
        correctAnswer: "langkah samping"
    }
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
    const percentage = ((score / questions.length) * 100).toFixed(2);
    let colorClass;
    let additionalText = "";

    if (percentage >= 70) {
        colorClass = "green";
        additionalText = "Keren!"; // Jika 70-100%, berwarna hijau
    } else if (percentage >= 50) {
        colorClass = "yellow";
        additionalText = "Sudah baik, tapi kalau bisa terus coba lagi ya"; // Jika 50-70%, berwarna kuning
    } else {
        colorClass = "red";
        additionalText = "Nilai kamu masih sangat rendah silahkan coba lagi"; // Jika di bawah 50%, berwarna merah
    }

    resultContainer.text(`Nilai: ${percentage} - ${additionalText}`);
    resultContainer.addClass(colorClass); // Menambahkan kelas warna sesuai kondisi
    $("#submit-btn").hide();
    $("#done-btn").show();
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
