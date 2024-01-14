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