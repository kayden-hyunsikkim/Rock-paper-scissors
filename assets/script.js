
var computer = ['R', 'P', 'S'];
var userchoice = '';
var computerchoice = '';

var win = 0;
var lose = 0;
var draw = 0;

function Rps() {
    var userchoice = prompt("Rock, paper, Scissors");
    var userchoice = userchoice.toUpperCase();


    if (userchoice !== 'R' && userchoice !== 'P' && userchoice !== 'S') {
        alert("try again");
    }


    var randomnumber = Math.floor(Math.random() * computer.length);
    var computerchoice = computer[randomnumber];
    alert("computerchoice : " + computerchoice);

    console.log(computerchoice);
    console.log(randomnumber);
    console.log(userchoice);

    if (userchoice == computerchoice) {
        alert('draw');
    }
    if (userchoice == "R" && computerchoice == "p") {
        alert('YOU LOSE');
    }
    if (userchoice == "R" && computerchoice == "S") {
        alert('YOU WIN');
    }
    if (userchoice == "P" && computerchoice == "R") {
        alert('YOU WIN');
    }
    if (userchoice == "P" && computerchoice == "S") {
        alert('YOU LOSE');
    }
    if (userchoice == "S" && computerchoice == "R") {
        alert('YOU LOSE');
    }
    if (userchoice == "S" && computerchoice == "P") {
        alert('YOU WIN');
    }
    console.log(computerchoice);
    console.log(userchoice);
    localStorage.setItem('value1', `${computerchoice}`);
    localStorage.setItem('value2', `${userchoice}`);
    return
}


function Winorlose() {

    let computerchoice = localStorage.getItem('value1');
    let userchoice = localStorage.getItem('value2');

    console.log(computerchoice);
    console.log(userchoice);



    if ((userchoice == "R" && computerchoice == "S") || (userchoice == "P" && computerchoice == "R") ||
        (userchoice == "S" && computerchoice == "P")) {
        win = win + 1;
        console.log(win);

    }
    else if ((userchoice == "R" && computerchoice == "p") || (userchoice == "P" && computerchoice == "S") ||
        (userchoice == "S" && computerchoice == "R")) {
        lose = lose + 1;
        console.log(lose);

    } else {
        draw = draw + 1;
        console.log(draw);
    }


}


var playmore = true;

while (playmore) {
    var computerrandom = Rps();
    var result = Winorlose();
    playmore = confirm('win: ' + win + '/' + 'Lose: ' + lose + '/' + "Draw: " + draw + "    one more game?");
 
}
