 const input = document.querySelector(".playerSelection");
 const para = document.querySelector("p");
 const aggressorDiv = document.createElement("div");
 const aggressor = document.querySelector("#compChoice");
 const scoreDiv = document.createElement("div");
 const score = document.querySelector("#scoreKeeper");
 let playerSelection = "";
 let computerSelection = "";
 let It = 0;
 let You = 0;

  function playRound() {
    aggressor.textContent = computerPlay()
    aggressor.appendChild(aggressorDiv)
    switch( playerSelection + computerSelection ) { 
        case "rockPaper!":
        case "paperScissors!": 
        case "scissorsRock!": 
            para.textContent = "You've doomed us all! You lose.";
            if ( para.textContent = "You've doomed us all! You lose." ) {
        ++It;
        alert("How could you! You gave it a point!");
            }
            score.textContent = "You: " + You + " It: " + It
            score.appendChild(scoreDiv);
            break;
        case "rockScissors!": 
        case "paperRock!": 
        case "scissorsPaper!":
            para.textContent = "You've won!!! Humanity is safe because of you.";
            if ( para.textContent = "You've won!!! Humanity is safe because of you." ) {
        ++You;
        alert("One point for humanity! +" + 1);
            }
            score.textContent = "You: " + You + " It: " + It
            score.appendChild(scoreDiv);
            break;
        case "rockRock!":
        case "paperPaper!":
        case "scissorsScissors!":
            para.textContent = "Tie! That was close! Try again.";
            if ( para.textContent = "Tie! That was close! Try again." ) {
        alert("I want a fair match! Let's go");
            }
            break;
        default:
            para.textContent = "Don't play games with humanity!"
            if ( para.textContent = "Don't play games with humanity!" ) { 
        ++It;
        alert(">:C It gets a point because of you +" + 1);
            }
            score.textContent = "You: " + You + " It: " + It
            score.appendChild(scoreDiv);
    }
}

function computerPlay() {
        let number = Math.floor( Math.random() * ( 80 - 10 ) + 10 )
          if ( number < 34 ) {
              return "Paper!";
          } else if ( number > 65 ) {
              return "Scissors!";
          } else { 
              return "Rock!";
          }
}

const buttonContainer = document.querySelector(".buttonContainer");
  
const rock = document.createElement("button");
  rock.classList.add("Choice");
  rock.textContent = "Rock";
  rock.addEventListener("click" , (e) => {
      playerSelection = "rock";
      computerSelection = computerPlay();
      rock.currentTime = 0;
      rock.classList.add("pressing");
      playRound(playerSelection , computerSelection);
  });
  buttonContainer.appendChild(rock);
  
const paper = document.createElement("button");
  paper.classList.add("Choice");
  paper.textContent = "Paper";
  paper.addEventListener("click" , (e) => {
      playerSelection = "paper";
      computerSelection = computerPlay();
      paper.currentTime = 0;
      paper.classList.add("pressing");
      playRound(playerSelection , computerSelection);
  });
  buttonContainer.appendChild(paper);
  
const scissors = document.createElement("button");
  scissors.classList.add("Choice");
  scissors.textContent = "Scissors";
  scissors.addEventListener("click" , (e) => {
     playerSelection = "scissors"
     computerSelection = computerPlay();
     scissors.currentTime = 0;
     scissors.classList.add("pressing");
     playRound(playerSelection, computerSelection);
  });
  buttonContainer.appendChild(scissors);
  
  function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("pressing");
    }

const buttons = document.querySelectorAll("button");
  buttons.forEach(button => button.addEventListener("transitionend" , removeTransition));
  
