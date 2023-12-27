const questions = [
    {
        question: "Za-zat yang diperlukan oleh tubuh dan berasal dari makanan disebut",
        options: ["lemak", "protein", "zat makanan atau zat gizi", "hidrat arang atau karbohidrat"],
        correctAnswer: "zat makanan atau zat gizi"
    },{
        question: "Zat gizi makanan yang berfungsi sebagai zat tenaga adalah",
        options: ["hidrat arang, lemak, protein", "vitamin, mineral, protein", "protein, mineral, lemak", "lemak, mineral, vitamin"],
        correctAnswer: "hidrat arang, lemak, protein"
    },{
        question: "Dalam pemeliharaan bahan makanan perlu diperhatikan mutu dari bahan yang akan dipilih dan hendaknya harus memenuhi persyaratan, antara lain",
        options: ["mahal dan kualitas ekspor", "bagus dan menarik", "tidak rusak dan mahal", "nilai gizi dan segar"],
        correctAnswer: "nilai gizi dan segar"
    },{
        question: "Hidup yang baik penuh disiplin dan makan teratur, merupakan dasar dari pola",
        options: ["hidup aman", "hidup sehat", "hidup senang", "hidup sejahtera"],
        correctAnswer: "hidup sehat"
    },{
        question: "Air minum dianggap membahayakan kesehatan insan apabila didalamnya mengandung zat",
        options: ["vitamin dan protein", "mineral dan oxygen", "karbohidrat dan lemak", "tembaga, seng, dan racun"],
        correctAnswer: "tembaga, seng, dan racun"
    },{
        question: "Zat makanan yang berfungsi untuk pembentukan hormon, tulang dan gigi serta darah yaitu",
        options: ["mineral", "protein", "lemak", "karbohidrat"],
        correctAnswer: "mineral"
    },{
        question: "Di bawah ini merupakan 'empat pilar gizi seimbang' kecuali",
        options: ["mengkonsumsi makan yang beraneka ragam", "membiasakan perilaku hidup bersih", "melakukan aktivitas berat", "memantau dan mempertahankan berat badan"],
        correctAnswer: "melakukan aktivitas berat"
    },{
        question: "Pernyataanyang benar tentang minuman sehat dibawah ini adalah",
        options: ["air yang cukup mengandung mineral dan mengandung racun/bibit penyakit", "air yang cukup mengandung mineral dan bebas racun/bibit penyakit", "air yang tidak mengandung mineral dan tidak mengandung racun/bibit penyakit", "air yang tidak mengandung mineral dan bebas dari racun/bibit penyakit"],
        correctAnswer: "air yang cukup mengandung mineral dan bebas racun/bibit penyakit"
    },{
        question: "Pengaruh yang mungkin terjadi jika zat gizi berkurang, kecuali",
        options: ["daya tahan tubuh terganggu", "obesitas", "penyakit jantung", "kolesterol"],
        correctAnswer: "obesitas"
    },{
        question: "Sikap yang harus dihindari agar pola hidup sehat kita menjadi tercapai dan teratur, kecuali",
        options: ["putus asa", "ragu-ragu", "rasa malu", "rendah hati"],
        correctAnswer: "rendah hati"
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
