const questions = [
    {
        question: "Senam yang membutuhkan gerakan keseimbangan, kekuatan dan kelentukan adalah",
        options: ["Senam kesegaran Jasmani", "Senam Yoga", "Senam Lantai", "Senam Irama"],
        correctAnswer: "Senam Lantai"
    },{
        question: "Kebalikan daripada roll depan adalah",
        options: ["Roll belakang", "Loncat Harimau", "Meroda", "Lenting Tangan"],
        correctAnswer: "Roll belakang"
    },{
        question: "Senam lantai merupakan salah satu bagian dari senam artistik. Senam dipertandingkan sejah tahun 1896 dalam pesta olahraga",
        options: ["PON", "Olimpiade", "Sea Games", "Asian Games"],
        correctAnswer: "Olimpiade"
    },{
        question: "Manfaat senam lantai dibawah ini, kecuali",
        options: ["Melemahkan otot tubuh", "Mengembangkan kualitas fisik", "Membentuk keindahan tubuh", "Mengembangkan otot tubuh"],
        correctAnswer: "Melemahkan otot tubuh"
    },{
        question: "Fungsi senam lantai adalah",
        options: ["Melatih kecepatan", "Melatih Keseimbangan", "Melatih Kecerdasan", "Pembentukan otot perut"],
        correctAnswer: "Pembentukan otot perut"
    },{
        question: "Berguling ke depan atas bagian belakang badan merupakan jenis senam lantai",
        options: ["Headstand", "Handstand", "Guling ke depan", "Guling ke belakang"],
        correctAnswer: "Guling ke depan"
    },{
        question: "Gerakan berguling dilakukan dengan",
        options: ["Mengencangkan badan sekuat tenaga", "Membulatkan badan", "Meliukkan badan", "Mengendorkan otot-otot"],
        correctAnswer: "Membulatkan badan"
    },{
        question: "Sikap awal roll depan dapat dilakukan dengan dua cara,yaitu",
        options: ["Sikap jongkok dan berdiri", "Sikap jongkok dan berbaring", "sikap berdiri dan terlentang", "sikap terlentang dan berdiri"],
        correctAnswer: "Sikap jongkok dan berdiri"
    },{
        question: "Untuk menjaga terjadi kesalahan otot sebelum latihan di perlukan",
        options: ["Pelatihan", "Pemanasan", "Pendinginan", "Pelenturan"],
        correctAnswer: "Pemanasan"
    },{
        question: "Tempat untuk berlatih senam dinamakan",
        options: ["Ring", "Velodrom", "Padepokan", "Gimnasium"],
        correctAnswer: "Gimnasium"
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
