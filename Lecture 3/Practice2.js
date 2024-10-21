let gamenumber = 25;
let usernum = prompt("Guess the game number:");

while(usernum != gamenumber){
    usernum = prompt("You entered wrong number Guess again:");
    console.log(usernum);
}

console.log("Congratulations You entered the right number");