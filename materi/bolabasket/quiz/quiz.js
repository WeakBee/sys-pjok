const questions = [
    {
        question: "yang termasuk permainan invasi adalah",
        options: ["bola basket", "tenis meja", "bola voli", "bulutangkis"],
        correctAnswer: "bola basket"
    },
    {
        question: "pencipta permainan bola basket adalah",
        options: ["William Fitzstephen", "James A. Naismith", "James Bond", "William G. Morgan"],
        correctAnswer: "James A. Naismith"
    },
    {
        question: "Satu regu dalam permainan bola basket terdiri dari",
        options: ["3 orang", "4 orang", "5 orang", "6 orang"],
        correctAnswer: "5 orang"
    },
    {
        question: "yang tidak termasuk teknik melempar dalam permainan bola basket adalah",
        options: ["chest pass", "overhead pass", "bounce pass", "dribbling"],
        correctAnswer: "dribbling"
    },
    {
        question: "Tujuan utama permainan bola basket adalah",
        options: ["menjadikan tubuh sehat", "menguatkan otot lengan", "menambah tinggi badan", "mencari nilai sebanyak-banyaknya"],
        correctAnswer: "mencari nilai sebanyak-banyaknya"
    },
    {
        question: "Sikap kaki saat memegang bola basket adalah",
        options: ["kedua kaki rapat", "kedua kaki dibuka selebar bahu", "salah satu kaki maju", "kedua kaki jinjit"],
        correctAnswer: "kedua kaki dibuka selebar bahu"
    },
    {
        question: "Bila kita akan mengoper bola kepada teman yang jaraknya jauh, maka lakukan lemparan",
        options: ["overhead pass", "bounce pass", "chest pass", "baseball pass"],
        correctAnswer: "overhead pass"
    },
    {
        question: "Gerakan spesifik memantul-mantulkan bola sambil dia, berjalan, atau berlari dalam permainan bola basket disebut",
        options: ["melempar/mengoper bola", "menggiring bola", "memegang bola", "menangkap bola"],
        correctAnswer: "menggiring bola"
    },
    {
        question: "Agar dapat bermain bola basket diperlukan penguasaan teknik dasar salah satunya teknik dasar drible. Gerakan yang benar pada saat melakukan gerakan drible adalah",
        options: ["bola dipantulkan ke lantai dengan cara dipukul dengan dua tangan", "bola dipantulkan ke lantai dengan cara didorong menggunakan dua tangan", "bola dipantulkan ke lantai dengan cara dipukul dengan satu tangan", "bola dipantulkan ke lantai dengan cara didorong menggunakan satu tangan"],
        correctAnswer: "bola dipantulkan ke lantai dengan cara didorong menggunakan satu tangan"
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
