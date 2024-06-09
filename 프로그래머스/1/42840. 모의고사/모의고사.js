/*
1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers

1 : 1, 2, 3, 4, 5
2 : 2, 1, 2, 3, 2, 4, 2, 5
3 : 3, 3, 1, 1, 2, 2, 4, 4, 5, 5

sort해서 0번째와 같은 사람을 filter
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return
*/

function solution(answers) {
    const s1 = [1, 2, 3, 4, 5];
    const s2 = [2, 1, 2, 3, 2, 4, 2, 5]; //2로 시작 , 1, 3, 4, 5
    const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //1회 반복, 3, 1, 2, 4, 5
    
    const s1Score = answers.reduce((a,c,i)=> s1[(i) % s1.length] === c ? a + 1 : a, 0)
    const s2Score = answers.reduce((a,c,i)=> s2[(i) % s2.length] === c ? a + 1 : a, 0)
    const s3Score = answers.reduce((a,c,i)=> s3[(i) % s3.length] === c ? a + 1 : a, 0)

    const returnValue = [s1Score,s2Score,s3Score]
    const maxScore = Math.max(...returnValue);
    
    return returnValue.map((r, i) => r === maxScore ? i + 1 : 0).filter(f => f != 0)
}