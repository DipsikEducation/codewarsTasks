/*----------------------------------------------------------TASK 1--------------------------------------------------*/

/*
Write a function that takes an array of words and smashes them together 
into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, 
but you should add spaces between each word. Be careful, 
there shouldn't be a space at the beginning or the end of the sentence!
______________________________________Example________________________
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

*/

function smash (words) {
  const sentence = words.join(" ").trim()
   return sentence
};


/*___________________________Test___________________*/
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("smash", () =>  {

  it ("Should return empty string for empty array.", () => {
    assert.strictEqual(smash([]), "");
  });

  it ("One word example should return the word.", () => {
    assert.strictEqual(smash(["hello"]), "hello");
  });
    
  it ("Multiple words should be separated by spaces.", () =>  {
    assert.strictEqual(smash(["hello", "world"]), "hello world");
    assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
    assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
  });
});





/*-------------------------------------------------------------TASK 2---------------------------------------------------------------------*/

/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
 that receive a list of integers as input, 
and return the largest and lowest number in that list, respectively.

*/


var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
   
    return Math.max(...list);
}


/*________________________________TEST__________________*/

const Test = require('@codewars/test-compat');

describe("Test", function(){
  it("Examples", function(){
    Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
    Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
    Test.assertEquals(max([5]), 5);
  });
});


/*-------------------------------------------------------TASK 3------------------------------------------------------*/


/*
Write a function that accepts an integer n and a string s as parameters, 
and returns a string of s repeated exactly n times.
*/

function repeatStr (n, s) {
  return s.repeat(n);
}


/*--------------------------------------------------------------TASK 4----------------------------------------------*/

/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/


const check = (a, x) => {
  return a.includes(x);
};

/*------------------------------------------------------------TASK 5 --------------------------------------------*/

/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


*/

function simpleMultiplication(number) {
  let even = 0;
  let odd = 0;
    if (number % 2 === 0){
      let even = number * 8;
      return even;
    }else{
      let odd = number * 9;
      return odd;
    }
}


/*SHORT EXAMPLE*/

/*
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

*/


/*---------------------------------------------------------TASK 6 -----------------------------------------------*/

/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/



function bmi(weight, height) {

  

  let bmiResult = weight/Math.pow(height,2) ;
​
  if (bmiResult <= 18.5) {
    return "Underweight";
    
  } else if (bmiResult <= 25.0) {
    return "Normal";

  } else if (bmiResult <= 30.0) {
    return "Overweight";

  } else if (bmiResult > 30) {
    return "Obese";
  }
}
 

/***********************************************************TASK 7****************************************************************************/


/*
Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).

*/

function countSheeps(sheep) {
  const trueSheeps = sheep.filter(Boolean);
  return trueSheeps.length;
}


/********************************************************TASK 8*******************************************************************************/ 