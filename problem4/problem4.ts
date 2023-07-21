console.log("Problem 4 - Maximum Sum SubArray of Size K")
function findMaxSubArraySum(k: number, arr: number[]): number{
    if (k <= 0 || k > arr.length){
        throw new Error("Nilai k harus berada di dalam rentang 1 hingga panjang Array")
    }

    let maxSum = 0
    let windowSum = 0

    for (let i = 0; i < k; i++){
        windowSum += arr[i]
    }

    maxSum = windowSum

    for (let i = k; i< arr.length; i++){
        windowSum = windowSum + arr[i] - arr[i - k]
        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum
}

console.log(findMaxSubArraySum(3, [2, 1, 5, 1, 3, 2]))