let gameSeq = []
let userSeq = []
let btns = ["yellow", "blue", "purple", "green"]
let started = false;
let level = 0;
let startbtn = document.querySelector('.startbtn')
startbtn.addEventListener('click',start)
let h2 = document.querySelector("h2")

document.addEventListener("keypress",start )
function start(){
    if (started == false) {
        started = true;
        levelup()
    }
}
function levelup() {
    userSeq = []
    level++;
    h2.innerText = `Level ${level}`

    let randInd = Math.floor(Math.random() * 3)
    let randClr = btns[randInd]
    gameSeq.push(randClr)
    console.log(gameSeq, "game sequnce")
    let randbtn = document.querySelector(`.${randClr}`)
    gameFlash(randbtn)

}

function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove('flash')
    }, 250)

}
function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove('userflash')
    }, 250)

}

let allBtns = document.querySelectorAll('.btn')
for (btn of allBtns) {
    btn.addEventListener('click', btnPress)
}

function btnPress() {
   if(started=== true){

       let btn = this;
       userFlash(btn)
       userClr = btn.getAttribute('id')
       userSeq.push(userClr)
       checkAns(userSeq.length - 1)
    }else{
        h2.innerText = "click start button  to game start."
    }
  

}



function checkAns(idx) {

    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000)

        }
    } else {
        h2.innerHTML = `Game over! Your Score was <b>${level}</b> <br/>  Press any key to start `
        document.querySelector('body').style.background = 'red'
        setTimeout(() => {
            document.querySelector('body').style.background = 'white'

        }, 150);
        reset()
    }
}


function reset() {
    level = 0;
    started = false
    gameSeq = []
    userSeq = []
}