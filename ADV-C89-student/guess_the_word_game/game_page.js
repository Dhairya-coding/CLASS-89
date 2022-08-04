player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1_name + " : ";
document.getElementById("player2").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_q").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_a").innerHTML = "Answer Turn - " + player2_name;

function send_question() {
    get_word = document.getElementById("word").value;
    word =  get_word.lowerCase();
    console.log(word);

    ch1 = charAt(1);
    console.log(ch1);

    word_lenght = Math.floor(word.lenght/2);
    ch2 = word.charAt(word_lenght);
    console.log(ch2);

    ch_minus = word.lenght-1;
    ch3 = word.charAt(ch_minus);
    console.log(ch3);

    remove_ch1 = word.replace(ch1, "_");

    remove_ch2 = remove_ch1.replace(ch2, "_");

    remove_ch3 = remove_ch2.replace(ch3, "_");
    console.log(remove_ch3);

    ques_word = "<h4> id='word_display'> Q. "+remove_ch3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button  = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = ques_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}