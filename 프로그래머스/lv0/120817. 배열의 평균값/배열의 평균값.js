function solution(numbers) {
    let answer = 0;
    
    for (let i = 0; i < numbers.length; i++)
        answer += numbers[i];
    
    return answer / numbers.length;
}

// <= numbers 로 기입해뒀음

// function solution(numbers){
// return numbers.reduce((acc,curr)=>acc + curr},0)/numbers.length
// }