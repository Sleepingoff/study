function solution(friends, gifts) {
    const n = friends.length;
    const sendCounts = Array(n).fill(0);
    const receiveCounts = Array(n).fill(0);
    const nextGifts = Array(n).fill(0);

    // 친구 이름을 인덱스로 매핑
    const friendIndex = {};
    friends.forEach((friend, index) => {
        friendIndex[friend] = index;
    });

    // 선물 주고받은 횟수 계산
    gifts.forEach(gift => {
        const [giver, receiver] = gift.split(" ");
        sendCounts[friendIndex[giver]]++;
        receiveCounts[friendIndex[receiver]]++;
    });

    // 선물 지수 계산
    const giftIndex = Array(n).fill(0);
    friends.forEach((friend, index) => {
        giftIndex[index] = sendCounts[index] - receiveCounts[index];
    });

    // 다음 달 선물 받을 횟수 계산
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                const giftsFromItoJ = gifts.filter(gift => gift === `${friends[i]} ${friends[j]}`).length;
                const giftsFromJtoI = gifts.filter(gift => gift === `${friends[j]} ${friends[i]}`).length;

                if ( (giftsFromItoJ || giftsFromJtoI )&& giftsFromItoJ > giftsFromJtoI) {
                    nextGifts[i]++;
                } 
                if (giftsFromItoJ === giftsFromJtoI && giftIndex[i] > giftIndex[j]) {
                        nextGifts[i]++;
                }
            }
        }
    }

    return Math.max(...nextGifts);
}
