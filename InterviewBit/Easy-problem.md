### Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than floor(n/2) times.
You may assume that the array is non-empty and the majority element always exist in the array.

Example :
Input : [2, 1, 2]
Return  : 2 which occurs 2 times which is greater than 3/2.

> this solution uses hash map/object in JS and has Time complexity O(N) and Space complexity O(N).
Link to the problem [Interview Bit](https://www.interviewbit.com/problems/majority-element/)


*Answer:*
```javascript
module.exports = { 
 //param A : array of integers
 //return an integer
	majorityElement : function(A){
        let check = {}
        for(let i=0; i<A.length; i++){
            check[A[i]] ? check[A[i]] += 1 : check[A[i]] = 1
        }
        const ans = Object.keys(check).filter(x => check[x] >= Math.floor(A.length/2))
        return parseInt(ans)
	}
};

```
> **Explanation** 

The easiest concept is to keep track of all the number of occurrences of each num in A, 
and use a filter in keys of **check** to see if any num appears less than or equal to the smallest rounding of the length of array A
