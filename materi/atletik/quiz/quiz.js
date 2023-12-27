const questions = [
    {
        question: "Perbedaan antara jalan dengan lari terletak pada?",
        options: ["Cara Kaki Menapak", "Kecondongan Badan", "Panjang Langkah", "Memasuki Garis Finish"],
        correctAnswer: "Cara Kaki Menapak"
    },
    {
        question: "Yang tidak diperbolehkan dalam melakukan gerak jalan cepat adalah?",
        options: ["Langkah Panjang", "Langkah Melayang", "Langkah Pendek", "Langkah Menyilang"],
        correctAnswer: "Langkah Melayang"
    },
    {
        question: "Pada gerakan lari cepat posisi kaki harus?",
        options: ["Kedua kaki kontak dengan tanah", "Kedua kaki boleh melayang", "Satu kaki selalu kontak dengan tanah", "Tidak ada ketentuan"],
        correctAnswer: "Kedua kaki kontak dengan tanah"
    },
    {
        question: "Berikut ini adalah teknik lari cepat, kecuali?",
        options: ["Start", "Teknik Lari Cepat", "Finish", "Langkah kaki"],
        correctAnswer: "Teknik Lari Cepat"
    },
    {
        question: "Start yang digunakan dalam perlombaan jalan cepat adalah?",
        options: ["Start Melayang", "Start Jongkok", "Start Berdiri", "Start Berlari"],
        correctAnswer: "Start Berdiri"
    },
    {
        question: "Pada saat kedua kaki menyentuh tanah, berakhir pula dorongan yang diikuti oleh gerakan tarikan, merupakan gerakan jalan cepat fase",
        options: ["Tumpuan dua kaki", "Tarikan", "Relaksasi", "Dorongan"],
        correctAnswer: "Tumpuan dua kaki"
    },
    {
        question: "Gerakan kaki depan akibat kerja tumit dan koordinasi seluruh bagian badan serta selesai apabila badan berada di atas kaki penopang, merupakan gerakan jalan cepat fase",
        options: ["Tumpuan dua kaki", "Tarikan", "Relaksasi", "Dorongan"],
        correctAnswer: "Tarikan"
    },
    {
        question: "Tahap ini berada antara selesainya fase tarikan dan awal dari fase dorongan kaki, merupakan gerakan jalan cepat fase",
        options: ["Tumpuan dua kaki", "Tarikan", "Relaksasi", "Dorongan"],
        correctAnswer: "Relaksasi"
    },
    {
        question: "Fase ini dilakukan apabila fase terdahulu selesai dan bila titik pusat gravitasi badan mengambil alih kaki tumpu, merupakan gerakan jalan cepat fase",
        options: ["Tumpuan dua kaki", "Tarikan", "Relaksasi", "Dorongan"],
        correctAnswer: "Dorongan"
    },
    {
        question: "Pada saat melakukan lari cepat gerakan lengan harus seirama dengan",
        options: ["Langkah kaki", "Panjang Langkah", "Kecondongan Badan", "Gerakan ke depan"],
        correctAnswer: "Langkah kaki"
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
