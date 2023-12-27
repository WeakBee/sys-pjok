const questions = [
    {
        question: "Salah satu kemampuan untuk menggerakkan persendian serta otot pada seluruh dengan ruang geraknya dinamakan",
        options: ["Kekuatan", "Kelincahan", "Kelenturan", "Kecepatan"],
        correctAnswer: "Kelenturan"
    },{
        question: "Kemampuan menggerakan tubuh secara berirama sehingga otot-otot terenggang dan teruluru dinamakan peregangan",
        options: ["baliistic", "static", "dinamis", "kinetis"],
        correctAnswer: "dinamis"
    },{
        question: "Kebutuhan kebugaran jasmani masing-masing orang tidak sama, kebutuhan tersebut tergantung pada",
        options: ["aktivitas yang dilakukan", "kondisi tubuh", "berat ringannya badan", "usia seseorang"],
        correctAnswer: "usia seseorang"
    },{
        question: "Waktu latihan yang dibutuhkan untuk menjaga kebugaran jasmani minimal seminggu dilakukan sebanyak",
        options: ["4 kali", "3 kali", "2 kali", "1 kali"],
        correctAnswer: "3 kali"
    },{
        question: "Di bawah yang bukan merupakan unsur-unsur dari kebugaran jasmani adalah",
        options: ["Stretching", "Strength", "Endurance", "Power"],
        correctAnswer: "Stretching"
    },{
        question: " Seseorang akan mempunyai kelentukan, kekuatan, dan daya tahan secara intensif berlatih selama ... minggu",
        options: ["7-9", "5-7", "4-6", "6-8"],
        correctAnswer: "5-7"
    },{
        question: "Seseorang yang mempunyai tingkat kebugaran jasmani yang baik akan terhindar dari resiko",
        options: ["Gangguan kesehatan", "Kram saat Olahraga", "Ketegangan otot", "Cedera saat olahraga"],
        correctAnswer: "Gangguan kesehatan"
    },{
        question: "Awalnya tidur telungkup, lalu kaki rapat dan kedua tangan berpasangan di belakang kepada kemudian angkat badan dengan dada tidak menyentuh ke lantai. Gerakan tersebut merupakan latihan",
        options: ["squad-jump", "back-up", "push-up", "sit-up"],
        correctAnswer: "sit-up"
    },{
        question: "Squad thrust adalah salah satu bentuk latihan",
        options: ["Kelenturan", "Koordinasi", "Daya Ledak", "Keseimbangan"],
        correctAnswer: "Kelenturan"
    },{
        question: "Lari naik turun bukit termasuk dalam latihan untuk meningkatkan",
        options: ["Kekuatan", "Kelincahan", "Daya tahan", "kecepatan"],
        correctAnswer: "Daya tahan"
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
