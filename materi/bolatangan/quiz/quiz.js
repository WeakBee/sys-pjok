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
        question: "Gerakan spesifik permainan bola tangan terdiri dari?",
        options: ["menahan bola", "menyundul bola", "menendang bola", "menggiring bola"],
        correctAnswer: "menggiring bola"
    },
    {
        question: "Dalam permainan bola tangan, teknik mengoper bola satu tangan bertujuan untuk?",
        options: ["mengoper bola jaraknya dekat", "mengoper bola bila dihalangi lawan", "menembak bola", "mengoper bola bila jaraknya jauh"],
        correctAnswer: "mengoper bola bila jaraknya jauh"
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
    {
        question: "Gerakan spesifik aktivitas pembelajaran permainan bola tangan terdiri dari berbagai macam gerakan, antara lain?",
        options: ["mengoper, menghentikan, menggiring bola", "menangkap, menggiring dan menembak bola", "memukul, menangkap, menggiring bola", "menghentikan, menggiring, memukul bola"],
        correctAnswer: "menangkap, menggiring dan menembak bola"
    },
    {
        question: "Teknik ini sangat berpengaruh bagi tim, karena dengan melakukan gerakan yang keras dan akurat, akan bisa mencetak sebuah gol dan menghasilkan suatu kemenangan. Pernyataan tersebut merupakan gerak spesifik.....dalampermainan bola tangan?",
        options: ["menendang bola", "menangkap bola", "menembak bola", "menggiring bola"],
        correctAnswer: "menembak bola"
    },
    {
        question: "Apakah siswa mampu mempraktekan gerakan mengoper bola dengan baik.",
        options: ["Iya", "Tidak"],
        correctAnswer: "Iya"
    },
    {
        question: "Apakah siswa mampu praktekan gerakan menangkap bola dengan baik.",
        options: ["Iya", "Tidak"],
        correctAnswer: "Iya"
    },
    {
        question: "Apakah siswa mampu mempraktekan gerakan menggiring bola dengan baik.",
        options: ["Iya", "Tidak"],
        correctAnswer: "Iya"
    },
    {
        question: "Apakah siswa mampu mempraktekan gerakan menembak bola dengan baik.",
        options: ["Iya", "Tidak"],
        correctAnswer: "Iya"
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
