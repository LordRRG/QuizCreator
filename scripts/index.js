// Redirect the user when they click a card

const takeQuiz = document.getElementById("attempt");

const makeQuiz = document.getElementById("make");

takeQuiz.addEventListener('click', function () {
    // Redirect
    window.location.href = '/pages/quizzes.html';
});