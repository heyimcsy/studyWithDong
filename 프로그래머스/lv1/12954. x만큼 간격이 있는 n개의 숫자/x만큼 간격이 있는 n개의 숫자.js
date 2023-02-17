function solution(x, n) {
    let result = [];
    for(let i = 1; i <= n; i++){
        arr = x * i
        result.push(arr)
    }
    return result
}