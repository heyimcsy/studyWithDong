function solution(n) {
    let answer = []
    let result = String(n).split("").sort().reverse().join('');

      answer = Number(result)
     return answer
} 


// 1.하나로 된 수 각각 배열로 쪼개
// 2. 정렬해
// 3.뒤집이ㅓ
// 4 합쳐