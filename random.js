//defining variables
var button = document.getElementById("startButton");
var endButton = document.getElementById("endButton");
var time;

var cb1 = document.getElementById("Check1");
var cb2 = document.getElementById("2Check");
var cb3 = document.getElementById("3Check");
var cb4 = document.getElementById("4Check");
var cb5 = document.getElementById("5Check");

var mess1 = document.getElementById("message1");
var mess2 = document.getElementById("message2");
var mess3 = document.getElementById("message3");
var mess4 = document.getElementById("message4");
var mess5 = document.getElementById("message5");


endButton.style.display = "none";// end session button should not be visible before session starts


//START OF FUNCTIONS-------------------------------------------------


function createCheckBoxFunction(checkelement, messageElement){

    checkelement.style.display= "inline-block"; 
    checkelement.addEventListener("click", function(){
        // code to be executed when checkbox is clicked

        checkelement.style.display="none";

        console.log("Checkbox Clicked");

        messageElement.style.display = "none";



    });
   
}




// Start button: add an event listener for the "click" event
button.addEventListener("click", function(){
    // Code to be executed when the button is clicked

    button.style.display="none";

    console.log("Clicked");

    var m = document.getElementById("message");
    
    
    time = setInterval(printTasksFunction, 3000);

    endButton.style.display = "block";

    
    
});





//Printing tasks
function printTasksFunction(){


    var randomNumber = Math.floor(Math.random()*100)+1;
    var messageCode = randomNumber;

    if (messageCode <= 20) {
        mess1.style.display = "inline-block";
        mess1.innerHTML = "Drink some water!";
        createCheckBoxFunction(cb1, mess1);

    } else if (messageCode > 20 && messageCode <= 40) {
        mess2.style.display = "inline-block";
        mess2.innerHTML = "stretchhhhhhh";
        createCheckBoxFunction(cb2, mess2);

    } else if (messageCode > 40 && messageCode <= 60) {
        mess3.style.display = "inline-block";
        mess3.innerHTML = "Give your eyes a break";
        createCheckBoxFunction(cb3, mess3);

    } else if (messageCode > 60 && messageCode <= 80) {
        mess4.style.display = "inline-block";
        mess4.innerHTML = "Get up and move around";
        createCheckBoxFunction(cb4, mess4);

    } else if (messageCode > 80) {
        mess5.style.display = "inline-block";
        mess5.innerHTML = "HMmmmmmmeditate";
        createCheckBoxFunction(cb5, mess5);
    }
}



//to end the session
endButton.addEventListener("click", function() {
    clearInterval(time);
    console.log("interval cleared")

    //makes all unfinished tasks invisible
    mess1.style.display = "none";
    mess2.style.display = "none";
    mess3.style.display = "none";
    mess4.style.display = "none";
    mess5.style.display = "none";

    cb1.style.display = "none";
    cb2.style.display = "none";
    cb3.style.display = "none";
    cb4.style.display = "none";
    cb5.style.display = "none";


    alert("Come back and visit me again soon! -Your Study Buddy"); //message to the user

});
