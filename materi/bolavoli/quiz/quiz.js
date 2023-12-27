const questions = [
    {
        question: "Dibawah ini adalah salah satu teknik dasar dalam permainan bola voli adalah",
        options: ["passing dada", "servis", "backhand", "mengontrol bola"],
        correctAnswer: "servis"
    },{
        question: "Kedua kaki terbuka, lutut ditekuk, kedua lengan lurus dijulurkan ke dpepan bawah dan tangan satu sama lain dikaitkan atau berpegangan, teknik ini merupakan gerakan",
        options: ["servis", "smash", "passing bawah", "passing atas"],
        correctAnswer: "passing bawah"
    },{
        question: "Pada waktu bola datang, bola didorong dengan jari-jari tangan dan perkenaannya melalui ruas pertama dan kedua dari jari telunjuk sampai kelingking, sedangkan ibu jari hanya pada ruas pertama saja, teknik ini merupakan",
        options: ["servis", "smash", "passing bawah", "passing atas"],
        correctAnswer: "passing atas"
    },{
        question: "Teknik dasar untuk memulai permainan bola voli adalah",
        options: ["passing bawah", "passing atas", "servis", "smash"],
        correctAnswer: "servis"
    },{
        question: "Dibawah ini adalah faktor-faktor keberhasilan dalam suatu servis, kecuali",
        options: ["kecepatan bola", "kerasnya bola yang dipukul", "perputaran bola", "penempatan bola ditempat kosong"],
        correctAnswer: "perputaran bola"
    },{
        question: "Teknik memukul bola sambil meloncat dekat net sekuat-kuatnya dengan maksud untuk mematikan permainan lawan adalah",
        options: ["servis", "smash", "passing", "block"],
        correctAnswer: "smash"
    },{
        question: "Posisi siap menghadap bola yang datang dari arah lawan yang dilakukan di dekat net oleh seseorang atau lebih pemain depan disebut",
        options: ["spike", "smash", "block", "passing"],
        correctAnswer: "block"
    },{
        question: "Dibawah ini adalah tahapan melakukan bendungan (block), kecuali",
        options: ["awalan", "berlari", "tolakan", "loncatan"],
        correctAnswer: "berlari"
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
