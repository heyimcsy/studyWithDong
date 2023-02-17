function solution(a, b) {
    let day = new Date(2016, a-1 , b)
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let thisday = week[day.getDay()]
    return thisday;
}