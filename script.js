const answer = Math.ceil(Math.random() * 19);
var score = 10;
document.getElementsByClassName('highscore')[0].innerText = (localStorage.Highscore) ? localStorage.Highscore : 0;

function check() {
    let num = document.getElementsByClassName('guess')[0].value;
    if (num) {
        if (score == 0) {
            lost();
        }
        else if (num < answer) {
            document.getElementsByClassName('message')[0].innerText = "Low!!!";
            score--;
        }
        else if (num > answer) {
            document.getElementsByClassName('message')[0].innerText = "High!!!";
            score--;
        }
        else {
            document.getElementsByClassName('message')[0].innerText = "Correct!!!";
            success();
        }
        document.getElementsByClassName('score')[0].innerText = score;
    }
}
function success() {
    document.body.style.backgroundColor = "#60b347";
    document.getElementsByClassName('highscore')[0].innerText = score;
    document.getElementsByClassName('btn check')[0].disabled = true;
    document.getElementsByClassName('number')[0].innerText = answer;
    if (localStorage.Highscore) {
        if (localStorage.Highscore < score) {
            localStorage.setItem('Highscore', score);
        }
    }
    else {
        localStorage.setItem('Highscore', score);
    }

}
function lost() {
    document.getElementsByClassName('message')[0].innerText = "You Lost 👎👎👎";
    document.getElementsByClassName('btn check')[0].disabled = true;
}
function restart() {
    location.reload();
}