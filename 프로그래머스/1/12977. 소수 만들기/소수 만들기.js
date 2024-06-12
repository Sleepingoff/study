/*
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수

 숫자들이 들어있는 배열 nums

 nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return
*/
const calcNums = [];

function solution(nums) {
    if(nums.length < 3) return calcNums.length;
    
    const currentNum = nums.pop();
    
    for(let i = 0; i < nums.length; i++){
        let target = nums[i];
        for(let k = i + 1; k < nums.length; k++){
            const calcNum = currentNum + target + nums[k]

            let count = Math.floor(Math.sqrt(calcNum));

            while(count > 1){
                if(calcNum % count != 0) count--;
                else break;
            }

            if(count === 1) calcNums.push(calcNum);
        }
    }
    
    return solution(nums);
}