const questions = [
    {
        question: "Gerakan spesifik dalam pencak silat yang digunakan sebagai dasar untuk sikap menyerang atau bertahan adalah",
        options: ["tendangan", "pukulan", "hindaran", "kuda-kuda"],
        correctAnswer: "kuda-kuda"
    },
    {
        question: "Posisi badan menghadap ke depan dengan kaki dibuka selebar bahu dan kedua lengan berada di samping pinggang merupakan gerak kuad-kuda",
        options: ["depan", "samping", "tengah", "belakang"],
        correctAnswer: "tengah"
    },
    {
        question: "Perubahan posisi kaki dari suatu tempat ke tempat lainnya dinamakan",
        options: ["geseran", "lompatan", "pola langkah", "loncatan"],
        correctAnswer: "pola langkah"
    },
    {
        question: "Cara memindahkan sasaran dari arah serangan dalam pencak silat adalah",
        options: ["serangan", "pembelaan", "tangkisan", "elakan"],
        correctAnswer: "elakan"
    },
    {
        question: "Cara pembelaan dengan mengadakan kontak langsung dengan lawan dinamakan",
        options: ["serangan", "pembelaan", "tangkisan", "elakan"],
        correctAnswer: "tangkisan"
    },
    {
        question: "Untuk menghindari pukulan lawan maka gerakan yang harus dilakukan adalah",
        options: ["mengelak", "menembak", "menangkis", "menghindar"],
        correctAnswer: "menghindar"
    },
    {
        question: "Tujuan gerakan menangkis adalah",
        options: ["menghindari pukulan lawan", "menghindari tendangan lawan", "menghindari tebasan lawan", "menghindari serangan lawan"],
        correctAnswer: "menghindari serangan lawan"
    },
    {
        question: "Berikut ini macam-macam elakan, kecuali",
        options: ["elakan bawah", "elakan atas", "elakan samping", "elakan jatuh"],
        correctAnswer: "elakan jatuh"
    },
    {
        question: "Serangan yang menggunakan lutut sebagai alat penyerangan, dengan sasaran kemaluan, dada, dan pinggang belakang dalam pencak silat dinamakan",
        options: ["tendangan", "dengkulan", "guntingan", "pukulan"],
        correctAnswer: "dengkulan"
    },
    {
        question: "Gerakan menjatuhkan lawan yang dilakukan dengan menjepit kedua tungkai kaki pada sasaran leher, pinggang, atau tungkai lawan sehingga terjatuh dalam pencak silat dinamakan",
        options: ["tendangan", "dengkulan", "guntingan", "pukulan"],
        correctAnswer: "guntingan"
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
