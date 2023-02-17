function solution(price, money, count) {
    for(let i = 1; i <= count; i++) {
        money = money - i * price
    }
        if( money > 0 ) {
         return 0
        } else {
            return - money
        }
}

// 선언 하면 또 선언 안 해도 됨