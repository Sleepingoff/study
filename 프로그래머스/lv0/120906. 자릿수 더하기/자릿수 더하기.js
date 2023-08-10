function solution(n) {
    let answer = 0;
    const stringN = n.toString().split('');
    stringN.forEach(e => answer += +e);
   return answer;
}