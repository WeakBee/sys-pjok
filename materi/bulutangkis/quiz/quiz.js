const questions = [
    {
        question: "pukulan yang diayun dari belakang badan kita dengan arah depan raket dan telapak tangan kita menghadap bola. pernyataan tersebut merupakan pengertian pukulan ?",
        options: ["pukulan service", "pukulan drive", "pukulan forehand", "pukulan backhand"],
        correctAnswer: "pukulan forehand"
    },{
        question: "posisi raket harus berada di atas atau menunjuk ke atas sementara posisi tangan yang memegang raket harus dekat dengan bahu yang berlawanan. pernyataan tersebut merupakan pengertian pukulan ?",
        options: ["pukulan service", "pukulan drive", "pukulan forehand", "pukulan backhand"],
        correctAnswer: "pukulan backhand"
    },{
        question: "Pukulan tipuan yang menyerupai smash, dan membuat shuttlecock jatuh di dekat Net dinamakan…",
        options: ["smash", "netting", "dropshot", "servis"],
        correctAnswer: "dropshot"
    },{
        question: "Pukulan yang mematikan dalam bulu tangkis dinamakan",
        options: ["smash", "netting", "dropshot", "servis"],
        correctAnswer: "smash"
    },{
        question: "seorang pemain dinyatakan menang dalam satu set permainan bulu tangkis apabila skor akhir mencapai angka?",
        options: ["22", "20", "19", "21"],
        correctAnswer: "21"
    },{
        question: "permainan bulu tangkis berasal dari negara?",
        options: ["jepang", "jerman", "india", "inggris"],
        correctAnswer: "inggris"
    },{
        question: "ukuran lapangan pada olahraga bulu tangkis untuk permainan tunggal adalah...",
        options: ["13,4m x 5,18m", "14,2m x 6,5m", "13,5m x 5,20m", "13,4m x 6,18m"],
        correctAnswer: "13,4m x 5,18m"
    },{
        question: "organisasi bulu tangkis Indonesia adalah...",
        options: ["PSSI", "PBVSI", "PASI", "PBSI"],
        correctAnswer: "PBSI"
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
