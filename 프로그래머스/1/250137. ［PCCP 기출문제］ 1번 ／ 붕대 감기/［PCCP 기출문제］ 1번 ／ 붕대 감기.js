/**
bandage : [기술의 시전 시간, 1초당 회복량, 추가 회복량]
health : 최대 체력을 의미하는 정수
attacks :[[몬스터의 공격 시간, 피해량]]
return: 남은 체력(죽으면 -1)

[5, 1, 5]	30	[[2, 10], [9, 15], [10, 5], [11, 5]]	

30 -> 2초후 -> 20 -> 붕대감기+1+1+1+1+1 (5초) -> 성공(+5) -> 30 -> 2초후(총 9초후) -> 15 -> 붕대감기(+1) (1초) -> 실패 -> 1초후(총 10초후) -> 11 -> 붕대감기(+1) (1초) -> 실패 -> 1초후(총 11초후) -> 7
*/
function solution(bandage, health, attacks) {
    const [t, p, d] = bandage;
    const maxHealth = health;
    let atkT = 0; //afterAttackTime
    const lastTime = attacks[attacks.length-1][0];
    const array = Array(lastTime).fill(0);
    attacks.forEach(atk => {
        array[atk[0]] = atk[1]; 
    })
    for(let i = 0; i< array.length; i++){
        const a = array[i];
        if(!a){
            atkT++;
            health += p;
            if(t === atkT) {
                health += d;
                atkT = 0;
            }
            if(health > maxHealth) health = maxHealth;
        }else{
            atkT = 0;
            health -= a;
        }
        if(health <= 0) break;
    }
    return health > 0 ? health : -1;
}