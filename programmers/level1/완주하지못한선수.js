function solution(participant, completion) {
    /* 
        참가자 중에서 한명만 완주하지 못 했다고 한다.
        참가자와 완주한 사람의 리스트가 있을 때, 완주하지 못한 사람을 찾으시오.
    */

    // 문자열은 Compare 함수를 쓰지 않아도 Sorting 할 수 있다.
    // 단, 숫자인 경우는 문자열로 변환하여 Sorting 하기 때문에 compare 함수 필요
    participant.sort();
    completion.sort();

    // 정렬을 했기 때문에 동일한 index에 이름이 일치하지 않으면 완주하지 못 한 사람이다.
    for (let i = 0, len = participant.length; i < len; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}