/*
전체 학생의 수 n
체육복을 도난당한 학생들의 번호가 담긴 배열 lost
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve

체육수업을 들을 수 있는 학생의 최댓값을 return 
*/

function solution(n, lost, reserve) {
    const reserves = reserve.filter(r => !lost.includes(r));
    const losts = lost.filter(l => !reserve.includes(l));
    
    const can = reserves.filter(l => losts.includes(l-1) || losts.includes(l+1));
    const both = reserves.filter(l => losts.includes(l-1) && losts.includes(l+1));
    const only = can.filter(l => !both.includes(l))
    const canTotal = can.length;
    
    const canReserve = losts.filter(l => can.includes(l-1) || can.includes(l+1))
    const cannotReserve = losts.filter(l => !canReserve.includes(l))
    const bothReserve = losts.filter(l => can.includes(l-1) && can.includes(l+1))
    const onlyReserve = canReserve.filter(l => !bothReserve.includes(l))
    const notReserve = both.filter(l => (onlyReserve.includes(l+1)  &&  onlyReserve.includes(l-1)))
    const remains = canTotal - bothReserve.length - (onlyReserve.length - notReserve.length);
    
    
    let diableCount = cannotReserve.length + notReserve.length;
    if(remains < 0) diableCount -= remains;
    
    return n - diableCount;
}