const questions = [
    {
        question: "Permainan tradisional yang menggunakan bambu sebagai alat untuk berjalannya adalah",
        options: ["gobak sodor", "egrang", "tarompah", "ankle"],
        correctAnswer: "egrang"
    },{
        question: "Egrang merupakan permainan tradisional di Indonesia, di beberapa daerah dikenal dengannama lokal, nama dalam bahasa Bengkulu yang berarti sepatu bambu yaitu",
        options: ["tengkak-tengkak", "jangkungan", "ingkan", "batungkan"],
        correctAnswer: "tengkak-tengkak"
    },{
        question: "Alat yang digunakan untuk egrang dengan ukuran tinggi bambu 2,5 m, tempat berpijak tinggi 50 cm, lebar 20 cm, panjang 10 cm, di perutukan untuk atlet yang berusia",
        options: ["6-12 tahun", "6 tahun ke atas", "13-17 tahun", "13 tahun ke atas"],
        correctAnswer: "13 tahun ke atas"
    },{
        question: "Balap karung merupakan olahraga tradisional yang menggunakan karung sebagai alat bantunya, kemampuan utama yang harus dimiliki seorang pembalap karung adalah",
        options: ["kekuatan", "kecepatan", "kelenturan", "kelincahan"],
        correctAnswer: "kecepatan"
    },{
        question: "Modifikasi agar balap karung lebih menarik adalah dengan cara",
        options: ["menjadikan balap karung menjadi estafet", "mempersempit karung", "menjauhkan jarak tempuh", "memberatkan lintasan dengan rintangan"],
        correctAnswer: "menjadikan balap karung menjadi estafet"
    },{
        question: "Permainan dorong ban disesuaikan dengan",
        options: ["postur peserta", "kekuatan peserta", "kelincahan peserta", "daya tahan peserta"],
        correctAnswer: "postur peserta"
    },{
        question: "Permainan tradisional dorong ban akan meningkatkan",
        options: ["kekuatan, kelincahan, kelenturan", "kekuatan, kemampuan tubuh, percaya diri", "kekuatan, keterampilan, keberanian", "kelincahan, konsentrasi, dan kontrol"],
        correctAnswer: "kelincahan, konsentrasi, dan kontrol"
    },{
        question: "Yang paling dominan dalam permainan bakiak panjang adalah",
        options: ["konsentrasi dan kekompakan", "kekuatan dan kelincahan", "kelenturan dan kekuatan", "kelenturan dan kelincahan"],
        correctAnswer: "konsentrasi dan kekompakan"
    },{
        question: "Bakiak merupakan olahraga tradisional yang berasal dari Sumatera Barat. Karena masih sering diperlombakan dalam acara kemerdekaan. Tujuandari olahraga bakiak adalah",
        options: ["memperagakan teknik gerakan bermain", "menampilkan teknik gerakan yang baik", "menguji kekompakan satu tim", "menunjukkan sikap sportifitas"],
        correctAnswer: "menguji kekompakan satu tim"
    },{
        question: "Manfaat utaman dari permainan tradisional adalah",
        options: ["melestarikan olahraga tradisional agar tidak punah digerus zaman", "menguatkan badan", "melatih kekompakan", "menguatkan persaudaraan"],
        correctAnswer: "melestarikan olahraga tradisional agar tidak punah digerus zaman"
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
