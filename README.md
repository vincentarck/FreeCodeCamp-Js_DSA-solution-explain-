# FreeCodeCamp (JavaSript DSA Explain)
Here I will provide an explanation of some of the challenges of FreecodeCamp, as a reference for some topic questions

>**Problem: Basic Algorithmic Scripting**

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

