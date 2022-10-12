function addition_Function() {
    var addition= 2 + 2;
    document.getElementById("Math").innerHTML="2 + 2 =" + addition;
}
function subtraction_Function() {
    var subtraction= 5 - 2;
    document.getElementById("Math").innerHTML="5 - 2=" + subtraction;
}
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML="48 / 6 = " + simple_Math;
}
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML="6 x 8 = " + simple_Math;
}
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML=" When you divide 25 by 6 you have a remainder of: " + simple_Math;
}
window.alert(Math.random() * 100);

var X = 5;
X++;
document.write(X)

var Y = 5.25;
Y--;
document.write(Y)
