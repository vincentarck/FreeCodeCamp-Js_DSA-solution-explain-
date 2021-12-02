# Simple Algorithms
Here I will provide an explanation of some of the easy challenges any platform coding question<br />

### Basic Algorithmic Scripting
> FreecodeCamp
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, *["hello", "Hello"]*, should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments *["hello", "hey"]* should return false because the string hello does not contain a y.
Lastly, *["Alien", "line"]*, should return true because all of the letters in line are present in Alien.

- Here's the constraints

| Input | Expected Output |
| --- | --- |
| ["Mary", "Aarmy"] | true |
| ["zyxwvutsrqponmlkjihgfedcba", "qrstu"] | true |
| ["voodoo", "no"] | false |
| ["Noel", "Ole"] | true |

*Code:*
```javascript
function mutation(arr) {
  let ind = 0;
  for(let i of arr[1].toLowerCase()){ -> 
    if(arr[0].toLowerCase().indexOf(i) > -1){ 
      ind++;
    }
  }
  return ind >= arr[1].length 
}
console.log(mutation(["hello", "hey"]));
```
### Explanation
**let ind = 0;**  this is to compare if all elements in arr[1] are in arr[0] 


**for(let i of arr[1].toLowerCase())** we explore every element arr and ensure we convert to lowercase


**if(arr[0].toLowerCase().indexOf(i) > -1)** here we make sure that the index of the second element arr is on the first element arr, -1 here to make sure the element is on arr[1], and then we add 1 to ind


**return ind >= arr[1].length** Because the constraints above allow the value of arr[1] to be repeated, >= is required to see all values of arr[0] present and to rule out excess presence of arr[1]

### Binary Addition
> Codewars
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
The binary number returned should be a string.

For example, *1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)*
For example, 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

> This solution is from me personally, maybe some of you can see that this solution is not optimal, and requires time complexity O(N logN).
because we divide to Binary by 2, every time we do modulo on toBinary.

*Code:*
```javascript
function addBinary(a,b) {
  let toBinary = a + b
  let binary = []
  while(toBinary >= 1){
      if(toBinary % 2 === 0){
        /*we use unshift to store the result modulo in ascending order of execution time, 
        so we put the result of the first operation at the end of the array*/
        binary.unshift(0) 
      }else{
        binary.unshift(1)
      }
      toBinary = Math.floor(toBinary / 2)
    }
  return binary.join("").replace(/,/g, "")
}
```
> Below is a shorter solution, just a few lines, but one should understand how **toString()** functions in depth


For Numbers and BigInts ***toString()*** takes an optional parameter radix the value of radix must be minimum 2 and maximum 36.
By using radix you can also convert 
* 2 for binary numbers,
* 8 for octal numbers,
* 10 for decimal numbers,
* 16 for hexadecimal numbers [Reference MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 


So in example below we are converting number to a base 2 (binary) number.
*Code:*
```javascript
function addBinary(a,b) {
  let number = a + b 
  return number >= 0 ? number.toString(2) : (~number).toString(2)
}
```
