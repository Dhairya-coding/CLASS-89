function back_page() {
    window.location = "activity_1.html";
}

function get_score() {
    score = localStorage.getItem("Score");
    document.getElementById("get_score").innerHTML = "<h1>score : " +score + "</h1>";
}