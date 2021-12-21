### Diagonal Difference

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:

```
1 2 3
4 5 6
9 8 9
```
The left-to-right diagonal = 1+5+9. The right to left diagonal = 3+5+9. Their absolute difference is . |15 - 17| = 2

Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
Each of the next n lines describes a row, arr[i], and consists of arr[n] space-separated integers arr[i][j].

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

**Sample Input**

```
3
11 2 4
4 5 6
10 8 -12
```
**Sample Output**

```
15
```

**Solution in JS**

```javascript
function diagonalDifference(arr) {
    // To sum answer in left diagonal and right diagonal
    let left = 0,
        right = 0
    // Pointer to keep track value of each row and column 
    //in left and right diagonal respectively
    let Pleft = 0;
    let Pright = arr.length;
    // Just using single loop
    // Then get those value that corresponding to left and right diagonal
    for(let i=0;i<arr.length;i++){
        // update left diagonal
        Pleft = i
        // update right diagonal
        Pright = Pright-1
        
        left+=arr[i][Pleft]
        right+=arr[i][Pright]
    }
    return Math.abs(left-right)
}

```
