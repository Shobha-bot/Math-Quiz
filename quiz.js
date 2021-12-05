question_turn = "Player1";
answer_turn = "Player2";

player1_score = 0;
player2_score = 0;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    answer = parseInt(number1) * parseInt(number2);
    console.log(answer);

    question = "<h4>" + number1 + " x " + number2 + "</h4>";
    input = "<br> <label for='answer'>Answer:</label><input type='number' id='answer'>";
    button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";

    row = question + input + button;
    document.getElementById("output").innerHTML = row;
    console.log(row);

    document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}

function check(){
    user_answer = document.getElementById("answer").value;

    if (user_answer == answer) {

        if (answer_turn == "Player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
            console.log(player1_score + " player1");

            document.getElementById("answer").value = "";

            question_turn = "Player2";
            answer_turn = "Player1";

            document.getElementById("question_turn").innerHTML = question_turn;
            document.getElementById("answer_turn").innerHTML = answer_turn;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
            console.log(player2_score + " player 2");

            document.getElementById("answer").value = "";

            question_turn = "Player1";
            answer_turn = "Player2";

            document.getElementById("question_turn").innerHTML = question_turn; 
            document.getElementById("answer_turn").innerHTML = answer_turn;          
        }
            
    } else {
        if (question_turn == "Player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
            console.log(player1_score + " player1");

            document.getElementById("answer").value = "";

            question_turn = "Player2";
            answer_turn = "Player1";

            document.getElementById("question_turn").innerHTML = question_turn;
            document.getElementById("answer_turn").innerHTML = answer_turn;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
            console.log(player2_score + " player 2");

            document.getElementById("answer").value = "";

            question_turn = "Player1";
            answer_turn = "Player2";

            document.getElementById("question_turn").innerHTML = question_turn; 
            document.getElementById("answer_turn").innerHTML = answer_turn;          
        }
        
     
    }
}