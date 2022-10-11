function My_First_Function() {
    var str="This is the button text"; //This will be the button
    document.getElementById("Button_Text").innerHTML=str;
}

function myFunction() {
    var sentence="I am learning"; // Will be written in text
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML=sentence;
}