/*Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so: */
function findNeedle(haystack) {
    let possition = 0;
    for(let i = 0; i < haystack.length;i++){
      if(haystack[i] == 'needle'){
        possition = i;
      }
    }
    return 'found the needle at position ' + possition;
  }