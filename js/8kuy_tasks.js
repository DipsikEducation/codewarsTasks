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

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.



*/

function getCount(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']; 
  for (let i = 0; i < str.length; i++)
    for (let x = 0; x < vowels.length; x++)
      if (str[i] === vowels[x]) {
        count++;
      }
  return count;
}


/* SHORT EXAMPLE USE match()

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

*/


/*SHORT

function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}


*/

/*----------------------------------------------------------------TASK 9------------------------------------*/


/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

/*-------------------------------------------------------TASK 10------------------------------------------*/
/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"


*/ 
function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return `${max} ${min}`;
}

/*--------------------------------------------------TASK 11-------------------------------------------------------*/

/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

/*My solution*/

function find_average(array) {
  if (array.length === 0) {
  return 0;
  }
  var result = 0;
  for (i=0; i<array.length; i++) {
    result +=array[i];
  }
  return result/array.length;
} 


/*short solution*/

// var find_average = (array) => {
//   return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }


/*--------------------------------------------------------------TASK 12 ----------------------------------------------- */

/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, 
he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word,
 check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith,
 but they are not capitalized in the same way he originally typed them.

*/

String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

/*-------------------------------------------------------------TASK 13 -------------------------------------*/

/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells.
RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:
*/

function DNAtoRNA(dna) {
  let modifiedVariable;
  const reverseDna = dna.slice();
  
  if (reverseDna.includes('T')) {
    modifiedVariable = dna.replace(/T/g, 'U');
  } else {
    modifiedVariable = dna;
  }

  return modifiedVariable;
}