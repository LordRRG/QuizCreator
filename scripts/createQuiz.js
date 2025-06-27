document.addEventListener("DOMContentLoaded", () => {
    const addQuestionBtn = document.getElementById("addQuestion");
    const createQuizBtn = document.getElementById("createQuizGame");

    const quizTitle = document.getElementById("quizTitle");
    const quizDescription = document.getElementById("quizDescription");

    const questionsDiv = document.getElementById("questions");

    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");

    addQuestionBtn.addEventListener("click", () => {
        // Add question logic
        const questionCount = document.querySelectorAll('.question-item').length + 1;
        const questionHTML = `
        <div class="question-item">
            <label>Question ${questionCount}:</label>
            <input type="text" name="question[]" required>

            <label>Option 1:</label>
            <input type="text" name="option1[]" required>

            <label>Option 2:</label>
            <input type="text" name="option2[]" required>

            <label>Option 3:</label>
            <input type="text" name="option3[]" required>

            <label>Option 4:</label>
            <input type="text" name="option4[]" required>

            <label>Correct Answer:</label>
            <input type="text" name="answer[]" required>
        </div>
        `;
        questionsDiv.insertAdjacentHTML("beforeend", questionHTML);
    });

    createQuizBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const isTitleEmpty = quizTitle.value.trim() === "";
    const isDescEmpty = quizDescription.value.trim() === "";
    const hasNoQuestions = questionsDiv.children.length === 0;

    if (isTitleEmpty || isDescEmpty || hasNoQuestions) {
        modal.classList.remove("hidden");
    } else {
        // ✅ Redirect to the quizzes page
        window.location.href = "/pages/quizzes.html";
    }
    });

    closeModal.addEventListener("click", () => {
        // Close modal
        modal.classList.add("hidden");
    });

});
