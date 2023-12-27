const questions = [
    {
        question: "Permainan kasti dikelompokkan menjadi permainan",
        options: ["lapangan", "invasi", "anak-anak", "kecil"],
        correctAnswer: "lapangan"
    },{
        question: "Di bawah ini adalah teknik bermainan kasti kecuali",
        options: ["melempar bola", "sliding", "menangkap bola", "memukul bola"],
        correctAnswer: "sliding"
    },{
        question: "lapangan bola kasti berbentuk",
        options: ["persegi", "bujur sangkar", "belah ketupat", "persegi panjang"],
        correctAnswer: "persegi panjang"
    },{
        question: "Pemain minimal untukpermainan kasti adalah",
        options: ["9 pemain", "10 pemain", "11 pemain", "12 pemain"],
        correctAnswer: "12 pemain"
    },{
        question: "bola yang diayunkan dari belakang ke depan bawah hingga bola itu meluncur setinggi lutut penerima, merupakan cara melempar bola",
        options: ["lurus mendatar", "melambung", "rendah", "menggelundung"],
        correctAnswer: "rendah"
    },{
        question: "Seoarang pelambung bertugas melambungkann bola ke arah pemukul dengan ayunan dari",
        options: ["bawah dengan dengan dua tangan", "atas dengan dua tangan", "bawah dengan satu tangan", "atas dengan satu tangan"],
        correctAnswer: "bawah dengan satu tangan"
    },{
        question: "Ayunan bola dari belakang bawah menuju ke depan atas hingga bola lepas dan melambung jauh, merupakan cara melempar bola",
        options: ["lurus mendatar", "melambung", "rendah", "menggelundung"],
        correctAnswer: "melambung"
    },{
        question: "Tangan lempar diayunkan dari atas menuju bawah lutut, merupakan cara melempar bola",
        options: ["lurus mendatar", "rendah", "melambung", "menggelundung"],
        correctAnswer: "menggelundung"
    },{
        question: "Di bawah ini adalah teknik memukul bola dalam dalam permainan kasti, kecuali",
        options: ["pukulan samping", "pukulan melambung jauh", "pukulan mendatar", "pukulan rendah"],
        correctAnswer: "pukulan samping"
    },{
        question: "Telapak tangan membentuk corong menghadap ke atas dan pandangan ke arah bola datang, merupakan cara menangkap bola",
        options: ["samping", "melambung", "mendatar", "menggelundung"],
        correctAnswer: "melambung"
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
