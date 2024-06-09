
/*
전체 스테이지의 개수 N
게임을 이용하는 사용자가 현재 멈춰있는,클리어 한 스테이지의 번호가 담긴 배열 stages
실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return
*/
function solution(N, stages) {
    //도달한 스테이지 = stage + 1;
    //클리어하지 못한 플레이어의 수 = UnderStages 
    //스테이지에 도달한 플레이어 수 = (N - UnderStage + 1)
    const players = stages.length;
    
    const failure = Array(N + 1).fill(0);
    for(let i = 0; i < players; i++){
        failure[stages[i] - 1]++;
    }
    
    const underStages = Array(N+1).fill(0);
    for(let i = 0; i < N+1; i++){
        underStages[i] = players-stages.filter(f => f < i + 1).length;
    }
    
    const value = failure.map((f,i)=>{
        return underStages[i] > 0 ? [f / underStages[i], i] : [0, i]
    })
    
    value.sort((a,b)=>  b[0] - a[0]);
    
    return value.map(v => v[1] + 1).filter(f => f != value.length);
}