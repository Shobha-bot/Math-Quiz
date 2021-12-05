function add_user(){
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    console.log(player1 + player2);

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    console.log("Stored User Names");

    window.location = "quiz.html";
}