const answer = Math.ceil(Math.random() * 19);
var score = 100;
var deduct = 10;
document.getElementsByClassName('highscore')[0].innerText = (localStorage.Highscore) ? localStorage.Highscore : 0;

function check() {
    let num = document.getElementsByClassName('guess')[0].value;
    if (num) {
        score -= deduct;
        if ((score == 0 && deduct == 10) || (score == -5 && deduct == 15) || (score == 0 && deduct == 20)) {
            lost();
            score = 0;
        }
        else if (num < answer) {
            document.getElementsByClassName('message')[0].innerText = "Low!!!";
        }
        else if (num > answer) {
            document.getElementsByClassName('message')[0].innerText = "High!!!";
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
function openmodal() {
    document.getElementById('backmodal').style.display = "block";
    document.getElementById('modal').style.display = "block";
}

window.addEventListener("click", function (e) {
    removemodel(e)
});
function removemodel(e) {
    e.target == document.getElementById('backmodal') ? document.getElementById('backmodal').style.display = "none" : false;
}
function changemode(e) {
    var esy = document.getElementsByClassName('easy')[0];
    var med = document.getElementsByClassName('med')[0];
    var hrd = document.getElementsByClassName('hrd')[0];
    if (e == 'EASY') {
        deduct = 10;
        esy.style.backgroundColor = "#9fe875";
        med.style.backgroundColor = "#cbc8c8";
        hrd.style.backgroundColor = "#cbc8c8";
    }
    else if (e == 'MEDIUM') {
        deduct = 15;
        esy.style.backgroundColor = "#cbc8c8";
        med.style.backgroundColor = "#f9c766";
        hrd.style.backgroundColor = "#cbc8c8";
    }
    else {
        deduct = 20;
        esy.style.backgroundColor = "#cbc8c8";
        med.style.backgroundColor = "#cbc8c8";
        hrd.style.backgroundColor = "#f47f6b";
    }
    score = 100;
    document.getElementsByClassName('score')[0].innerText = score;
    setTimeout(() => {
        document.getElementById('backmodal').style.display = "none";
    }, 200);
    document.getElementsByClassName('between')[0].innerText = `MODE: ${e}`;
}