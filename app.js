let userscore=0;

let compscore=0;

const choices =document.querySelectorAll(".choice");

const userscore_diplay = document.querySelector("#user-score");

const compscore_diplay = document.querySelector("#computer-score");

const resetButton = document.querySelector(".btn");

const resultmessage = document.querySelector("#result-display");


const gencompchoice =() =>{
    const option =["rock","paper","scissors"];
    const random=Math.floor(Math.random()*3);
    return option[random];

    
};



const showwinner = (win,userchoice,compchoice) => {
    if (win === "yes") {
        console.log("You win");
        resultmessage.innerText=`You win! ${userchoice} beats ${compchoice}`;
        userscore++;
        userscore_diplay.innerText= userscore;

    } else if (win === "no") {
        console.log("You lost");
        resultmessage.innerText=`You lost!  ${compchoice} beats ${userchoice}`;
        compscore++;
        compscore_diplay.innerText= compscore;

    } else {
        console.log("Draw");
        resultmessage.innerText="Game was draw!";

    }
};



const playgame = (userchoice) => {
    console.log("User choice =", userchoice);
    const compchoice = gencompchoice();
    console.log("Computer choice =", compchoice);
    let win = "draw";

    if (userchoice === compchoice) {
        win = "draw";
    } else {
        if (userchoice === "rock") {
            if (compchoice === "paper") {
                win = "no";
            } else {
                win = "yes";
            }
        } else if (userchoice === "paper") {
            if (compchoice === "scissors") {
                win = "no";
            } else {
                win = "yes";
            }
        } else if (userchoice === "scissors") {
            if (compchoice === "rock") {
                win = "no";
            } else {
                win = "yes";
            }
            
        }
       
    }
    showwinner(win,userchoice,compchoice);
};





choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id");
       
        playgame(userchoice);

    });
});




resetButton.addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    userscore_diplay.innerText = userscore;
    compscore_diplay.innerText = compscore;
    resultmessage.innerText = ""; // Clear the result message
    console.log("Scores have been reset");
});
