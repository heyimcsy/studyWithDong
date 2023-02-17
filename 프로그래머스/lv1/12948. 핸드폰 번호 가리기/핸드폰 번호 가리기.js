function solution(phone_number) {
    let i = phone_number.length
    let str = "*"
    return str.repeat(i-4) + phone_number.slice(i-4)
}