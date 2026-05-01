const navIcon = document.querySelectorAll(".navBar .icon");
const boxes = document.querySelectorAll(".box");
const reset = document.querySelector(".reset");
const msgContainer = document.querySelector(".msg-container");
const playNewGame = document.querySelector(".newGame");
const bgMusic = new Audio("background-music.mp3.mp3");
const btnMusic = new Audio("button.mp3.mp3");
const winMusic = new Audio("win.mp3.mp3");

let turnX = true;

const winPatterns = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];
// 

    
boxes.forEach(box =>{
    box.addEventListener("click", ()=>{
        bgMusic.play();
        box.innerText = "X";
        if(turnX===true){
            btnMusic.play();
            box.innerText = "X";
            turnX = false;    

        }
        else {
            btnMusic.play();
            box.innerText = "O";
            turnX = true;

        }
        box.disabled = true;
        checkWin();
    })
})

const showWinner = (winner) =>{
    msg.innerText = `Congratulations! Winner is ${winner} `;
    document.querySelector(".msg-container").style.display = "block";
    document.querySelector(".newGame").style.display = "block";
    setTimeout(() => {
        winMusic.play();
        
    }, 100);
    msgContainer.style.display = "flex";
    disableBoxes();
    playNewGame.style.display = "block";
}

const disableBoxes = () =>{
    for(box of boxes){
        box.disabled=true;
        bgMusic.pause();

    }
}

const enableBoxes =()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText = "";
        msgContainer.classList.add("hide");
        document.querySelector(".newGame").style.display = "none";
        document.querySelector(".msg-container").style.display = "none";
    }
}

const newGame = () =>{
    btnMusic.play();
    turnX  = true;
    enableBoxes();
}

const resetGame =() =>{
    btnMusic.play();
    bgMusic.pause();
    turnX = true;

    enableBoxes();
    
}


const checkWin = () =>{
    for(pattern of winPatterns){
        let a = boxes[pattern[0]-1].innerText;
        let b = boxes[pattern[1]-1].innerText;
        let c = boxes[pattern[2]-1].innerText;
        if(a!== "" || b!=="" || c!==""){
          if(a===b && b===c){
              showWinner(a);

          }
        }
    }
}

    
playNewGame.addEventListener("click", newGame);
reset.addEventListener("click", resetGame)

