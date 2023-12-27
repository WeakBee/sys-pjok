const questions = [
    {
        question: "Lama permainan sepak bola adalah",
        options: ["1 x 45 menit", "2 x 45 menit", "3 x 45 menit", "4 x 45 menit"],
        correctAnswer: "2 x 45 menit"
    },
    {
        question: "pemain sepak bola yang bertugas sebagai penjaga gawang adalah?",
        options: ["kiper", "poros", "gelandang", "penyerang"],
        correctAnswer: "kiper"
    },
    {
        question: "Tujuan utama permainan sepak bola adalah?",
        options: ["Menyehatkan Badan", "bermain baik", "memasukkan bola ke gawang lawan", "menambah tinggi badan"],
        correctAnswer: "memasukkan bola ke gawang lawan"
    },
    {
        question: "Gerakan yang dominan/sering dilakukan dalam permainan sepak bola adalah?",
        options: ["menahan bola", "menyundul bola", "menggiring bola", "menendang bola"],
        correctAnswer: "menendang bola"
    },
    {
        question: "Anggota badan yang tidak dierbolehkan untuk digunakan dalam bermain sepak bola adalah?",
        options: ["tangan", "paha", "kaki", "dada"],
        correctAnswer: "tangan"
    },
    {
        question: "Teknik menendang yang digunakan untuk memberikan  bola jarak pendek antar pemain?",
        options: ["menendang dengan kaki bagian luar", "menendang dengan punggung kaki", "menendang dengan telapak kaki", "menendang dengan kaki bagian dalam"],
        correctAnswer: "menendang dengan kaki bagian dalam"
    },
    {
        question: "Dibawah ini cara menghentikan bola pada sepak bola, kecuali?",
        options: ["dengan telapak kaki", "dengan tangan", "dengan dada", "dengan paha"],
        correctAnswer: "dengan tangan"
    },
    {
        question: "Gerak spesifik pembelajaran sepak bola memiliki berbagai macam gerakan, antara lain?",
        options: ["menendang, menghentikan, menggiring bola", "menendang, memukul dan melempar bola", "memukul, menghentikan, menggiring bola", "menghentikan, menggiring, memukul bola"],
        correctAnswer: "menendang, menghentikan, menggiring bola"
    },
    {
        question: "Upaya mendorong atau membawa bola ke arah tertentu sambil berlari sehingga bola bergulir di tanah dan tetap dikuasai olehb pemain, dinamakan?",
        options: ["menendang bola", "menahan bola", "menyundul bola", "menggiring bola"],
        correctAnswer: "menggiring bola"
    },
    {
        question: "Jumlah pemain sepak bola adalah?",
        options: ["7", "9", "10", "11"],
        correctAnswer: "11"
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
