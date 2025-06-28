document.addEventListener("DOMContentLoaded", () => {
    const addQuestionBtn = document.getElementById("addQuestion");
    const createQuizBtn = document.getElementById("createQuizGame");

    const quizTitle = document.getElementById("quizTitle");
    const quizDescription = document.getElementById("quizDescription");

    const questionsDiv = document.getElementById("questions");

    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");

    function saveToLocal() {
        // Save the quiz data in the local storage
        const formData = new FormData(document.querySelector("form"));
        const quiz = {};
        for (let [key, value] of formData.entries()) {
            if (!quiz[key]) {
                quiz[key] = [];
            }
            quiz[key].push(value);
        }
        // Get existing quizzes array or start new
        const existingQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

        // Add the new quiz to the array
        existingQuizzes.push(quiz);

        // Save the updated quizzes array back to localStorage
        localStorage.setItem("quizzes", JSON.stringify(existingQuizzes));

        console.log("Quiz saved!", quiz);
    }

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
            <input type="text" name="answer[]" id="correctAnswer" required>
        </div>
        `;
        questionsDiv.insertAdjacentHTML("beforeend", questionHTML);
    });

    createQuizBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const isTitleEmpty = quizTitle.value.trim() === "";
        const isDescEmpty = quizDescription.value.trim() === "";
        const hasNoQuestions = questionsDiv.children.length === 0;
        const correctAnswer = document.getElementById("correctAnswer");
        const isAnswerEmpty = correctAnswer.value.trim() === "";

        if (isTitleEmpty || isDescEmpty || hasNoQuestions || isAnswerEmpty) {
            modal.classList.remove("hidden");
        } else {
            // ✅ Redirect to the quizzes page
            saveToLocal();
            window.location.href = "/pages/quizzes.html";
        }
    });

    closeModal.addEventListener("click", () => {
        // Close modal
        modal.classList.add("hidden");
    });

});
