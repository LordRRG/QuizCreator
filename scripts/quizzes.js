// Handle the quizzes from local storage data

document.addEventListener("DOMContentLoaded", () => {
    let quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    console.log(quizzes);

    const forNoQuizzes = "<p>There aren't any quizzes yet... wanna make one?</p>";
    const quizzesDiv = document.getElementById("quizzes");

    // Array of image file paths
    const quizImages = [
        "/images/quiz1.jpg",
        "/images/quiz2.jpg",
        "/images/quiz3.jpg",
        "/images/quiz4.jpg",
        "/images/quiz5.jpg"
    ];

    if (quizzes.length === 0) {
        quizzesDiv.insertAdjacentHTML('beforeend', forNoQuizzes);
    } else {
        // Return the quiz cards
        for (let i = 0; i < quizzes.length; i++) {
            // Pick a random image
            const randomImage = quizImages[Math.floor(Math.random() * quizImages.length)];
            let quizCard = 
            `<div class="quizCard" style="
                background: #ffffff;
                width: 250px;
                height: 250px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 15px;
                margin: 15px;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                transition: transform 0.2s ease-in-out;
                cursor: pointer;
                text-align: center;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                <img src="${randomImage}" alt="Quiz Image" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px;">
                <h3 style="margin: 10px 0 5px; font-size: 1.2em; color: #333;">${quizzes[i].quizTitle[0]}</h3>
                <p style="margin: 0; font-size: 0.95em; color: #666;">${quizzes[i].quizDescription[0]}</p>
            </div>`;
            quizzesDiv.insertAdjacentHTML('beforeend', quizCard);
        }
    }

    // Listen to the event where a user clicks on a quiz
});
