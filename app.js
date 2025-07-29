const step = prompt("Enter the maximun size to guess ");

const randomNo = parseInt(Math.floor( Math.random() * step) + 1);



let guess = prompt("enter the number to guess");
while(true) {
        if(guess == "quit") {
            console.log("Quitting the game!!!");
            break;
        }
        if (guess == randomNo) {
            console.log("You Won!!!");
            break;
        
        }
        else {
            guess=prompt("You are wrong!!! Enter new: ")
        }
}
 