/*
사과의 최대 점수 k
한 상자에 들어가는 사과의 수 m
사과들의 점수 score

과일 장수가 얻을 수 있는 최대 이익을 return
*/

function solution(k, m, score) {
    //최고가의 개수가 m을 넘기는지
    //최저가가 상자에 포함되는지
    const arr = Array(k).fill(0).map((a,i)=> a += k - i);
    
    let target = 0;
    const boxes = [];
    
    for(let i = 0; i < k; i++){
        const current = arr[i];
        if(!score.includes(current)) continue;
        target += score.filter(o => o === current).length;
        const box = Math.floor(target / m);
        const rest = target % m;
        if(box > 0) {
            boxes.push([current, box]);
        }
        target = rest;
    }
    return boxes.reduce((a,c)=> a += c[0] * m * c[1], 0)
}