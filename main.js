

// Number(num_one);
// Number(num_two);
// var submit, Calculate;
//
var num_one = document.getElementById('num_one');
var num_two = document.getElementById('num_two');
var submit = document.getElementById('calculateBtn');
var answer = document.getElementById('answer');
var solution;

// var calculateButton = document.getElementById(calculateBtn)
// var answer = num1 + num2;
//
// var answer = function()





submit.onclick = function(){

 solution = Number(num_one.value) + Number(num_two.value);
console.log(solution);
answer.innerHTML= solution;
};
