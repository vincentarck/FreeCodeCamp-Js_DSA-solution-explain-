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
// Time Complexity O(N)
function diagonalDifference(arr) {
    // Write your code here
    // Left diagonal itu selalu berada di baris dan kolom yang sama, kita simpan di variable j
    // Right diagonal itu selalu di indeks akhir arr, dikurang 1 setiap baris, kita simpan di variable i
    let i=arr.length-1, j=0;
    // jumlah diagonal sisi kiri dan kanan
    let left=0,right=0;
    while(i>=0 && j<arr.length){
        left+=arr[j][j]
        right+=arr[j][i]
        j+=1
        i-=1
    }
    return Math.abs(left-right)
}

```
