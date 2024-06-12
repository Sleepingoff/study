const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
const dict = {
    1: 31 % days.length,
    2: 29 % days.length,
    3: 31 % days.length,
    4: 30 % days.length,
    5: 31 % days.length,
    6: 30 % days.length,
    7: 31 % days.length,
    8: 31 % days.length,
    9: 30 % days.length,
    10: 31 % days.length,
    11: 30 % days.length,
    12: 31 % days.length
}

function solution(a, b) {
    let count = 5 + b; //금요일 시작
    for(let i = 1; i < a; i++){
        count += dict[i]
    }
    const answer = days[count % days.length === 0 ? 6 : count % days.length - 1]
    return answer;
}