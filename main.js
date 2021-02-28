let screen = document.getElementById("screen");

buttons = document.querySelectorAll("button"); // this will target all the buttons

let screenValue = ""; // this is just that input value
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText; // using this step it will target the innertext that is wriittn inside the button
        console.log("Button text is", buttonText);
        if (buttonText == "X") {
            buttonText = "*"; // now that the multiply button text is just X this step will convert it into multiply *
            screenValue += buttonText;
            screen.value = screenValue; // this things sets the value of the screen 
        } else if (buttonText == "C") {
            screenValue = ""; // this thing will empty the screen i.e. remove the digits
            screen.value = screenValue;
        } else if (buttonText == "=") {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText; // this step will show the button in input box
            screen.value = screenValue;
        }
    })
}