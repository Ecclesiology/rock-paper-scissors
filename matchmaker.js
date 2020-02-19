 //Variables attatched to the HTML to allow the displaying of the results in the HTML.
 const input = document.querySelector(".playerSelection");
 const para = document.querySelector("p");
 const aggressorDiv = document.createElement("div");
 const aggressor = document.querySelector("#losing");
 const scoreDiv = document.createElement("div");
 const score = document.querySelector("#winning");
 let It = 0;
 let You = 0;

 //Upon input from the user, the choice from the user is concatecated with 
 //the computer's to test victory or loss.
 //The alerts display the results of the test, the increments increase the displayed scores, 
 //and the textContents record values. 
input.onchange = function playRound() {
    const playerSelection = input.value
    const computerSelection = computerPlay()
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

//The automated opponent chooses randomly from a range of 80 to 10.
//The Math.random function was displaying one answer
//before execution yet another after execution.

//This lead to a less than satisfying results in the switch function,
//causing a win when it should've been a tie, and a loss when it was to be a win
//Thus, after much testing, I left it alone, as I couldn't seem to fix it.
function computerPlay() {
        let number = Math.floor( Math.random() * ( 80 - 10 ) + 10 )
          if ( number < 34 ) {
              return "Paper!"
          } else if ( number > 65 ) {
              return "Scissors!"
          } else { 
              return "Rock!"
          }
}

