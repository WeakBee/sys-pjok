const questions = [
    {
        question: "Gaya renang dengan posisi tubuh seperti merangkak dipermukaan air dikombinasikan dengan gerakan kaki dan tangan. Tangan dan kaki berada di dalam air dan kepala bergerak naik turun dari dalam air kepermukaan air disebut",
        options: ["Dada", "Bebas", "Punggung", "Kupu-Kupu"],
        correctAnswer: "Dada"
    },{
        question: "Posisi badan renang gaya dada adalah",
        options: ["Sehorizontal mungkin dengan air", "Posisi badan lebih tinggi dari kaki", "Kepala lebih tinggi dari kaki", "Seluruh anggota badan tegang"],
        correctAnswer: "Sehorizontal mungkin dengan air"
    },{
        question: "Berikut ini yang tidak termasuk gerakan renang gaya dada adalah",
        options: ["Gerakan kaki", "Gerakan mengapung", "Gerakan Lengan", "Pengambilan Nafas"],
        correctAnswer: "Gerakan mengapung"
    },{
        question: "Gerakan yang lebih dominan digunakan dalam gaya dada adalah",
        options: ["Gerakan kaki", "Gerakan lengan", "Pengambilan Nafas", "Gerakan kaki dan lengan"],
        correctAnswer: "Gerakan kaki"
    },{
        question: "Gaya dada dinamakan juga dengan gaya",
        options: ["Gaya punggung", "Gaya katak", "Gaya kupu-kupu", "Gaya dada"],
        correctAnswer: "Gaya katak"
    },{
        question: "Dibawah ini adalah gaya dalam renang, kecuali",
        options: ["Gaya kupu-kupu", "Gaya bebas", "Gaya Kepala", "Gaya dada"],
        correctAnswer: "Gaya Kepala"
    },{
        question: "Penggunaan kacamata renang dengan tujuan",
        options: ["Memaksimalkan gerakan tangan", "mencegah iritasi mata", "Meminimalkan gerakan tangan", "Mencegah alergi kulit"],
        correctAnswer: "mencegah iritasi mata"
    },{
        question: "FINA dibentuk pada tahun",
        options: ["1890", "1908", "1980", "1981"],
        correctAnswer: "1908"
    },{
        question: "Persatuan olahraga renang indonesia dinamakan",
        options: ["PBI", "PBVSI", "PRI", "PRSI"],
        correctAnswer: "PRSI"
    },{
        question: "Persatuan renang dunia dinamakan",
        options: ["FINO", "FINA", "FBA", "AIBA"],
        correctAnswer: "FINA"
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
