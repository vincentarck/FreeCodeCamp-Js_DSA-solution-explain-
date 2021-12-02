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
