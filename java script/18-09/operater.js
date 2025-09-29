let player1 = prompt("Player 1: Enter rock, paper, or scissors").toLowerCase();
let player2 = prompt("Player 2: Enter rock, paper, or scissors").toLowerCase();

if (player1 === player2) {
    console.log("It's a draw!");
} else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
) {
    console.log("Player 1 wins!");
} else if (
    (player2 === "rock" && player1 === "scissors") ||
    (player2 === "paper" && player1 === "rock") ||
    (player2 === "scissors" && player1 === "paper")
) {
    console.log("Player 2 wins!");
} else {
    console.log("Invalid input! Please enter rock, paper, or scissors.");
}



// let marks = 82;

// let score = marks >= 51 ? "excellent" : "good"
// console.log(score)



// let marks = 82;

// let result = marks >= 90 ? "Excellent" : marks >= 75 ? "Good" : marks >= 50 ? "Average" : "Fail";

// console.log(result);



let marks = 29

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

alert("welcome")
prompt("enter your name","Deepak")