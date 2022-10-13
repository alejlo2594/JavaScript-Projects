var X = 10; // Global Variable
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>") // Local Variable
function Add_numbers_1() {
    X = 10
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>") // Console log 
function Add_numbers_1() {
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log (X + 100);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>") // "if" statement
if (1 < 2) {
    document.write("The left number is smaller than the number on the right")
}

document.write("<br>") // Time of day function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time> 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening time!"
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}