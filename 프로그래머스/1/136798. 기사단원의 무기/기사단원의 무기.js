/*
기사단원의 수를 나타내는 정수 number
이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit
제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power

무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return
*/

function solution(number, limit, power) {
    const nums = Array(number).fill(0).map((n,i)=> n = getDivisor(i + 1));
    return nums.reduce((a,c)=> a += c <= limit ? c : power, 0) 
}

function getDivisor(num){
    if(num === 1) return 1;
    if(num <= 3) return 2;
    
    let divisors = 0;
    const index = Math.sqrt(num);
    
    for (let i = 0 ; i < index; i++){
        if(num % i == 0) divisors+= 2;
    }
    if(Number.isInteger(index)) divisors++;
    return divisors;
}