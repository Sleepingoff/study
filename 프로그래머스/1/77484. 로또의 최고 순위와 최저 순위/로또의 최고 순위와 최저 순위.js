/*
민우가 구매한 로또 번호를 담은 배열 lottos
당첨 번호를 담은 배열 win_nums
당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return
*/

function solution(lottos, win_nums) {
    //0은 전체 일치 혹은 전체 불일치
 let max = 1, min = 1;
    lottos.map(l => {
        const has = win_nums.includes(l)
        if(!has){
            if(l != 0 && max < 6) max++;
            if(min < 6) min++;
        }
        return has
    })
    return [max, min]
    
    
}