/*
두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)

gpt... 고마운 친구..
*/

function solution(X, Y) {
    // const countX = Array(10).fill(0)
    // const countY = Array(10).fill(0)
    const count = Array(10).fill(0)
    
     for (let i = 0; i <= 9; i++) {
        const regex = new RegExp(`${i+""}`, "g");
        const matchX =X.matchAll(regex);
        const matchY =Y.matchAll(regex);
        count[i] = Math.min([...matchX].length, [...matchY].length)
    }
    
    //  for (let i = 9; i >= 0; i--) {
    //     const regex = new RegExp(`${i+""}`, "g");
    //     if(!regex.test(Y)) continue;
    //     const match =Y.matchAll(regex);
    //     countY[i] = [...match].length + 1;
    // }
    
    let result = "";
    for (let i = 9; i >= 0; i--) {
        result += (i+"").repeat(count[i])
    }
    
    if (result === '') return '-1';
    if (result[0] === '0') return '0';
    return result;
    //return BigInt(result) + "";
}