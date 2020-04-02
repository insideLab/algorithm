/*
문제에서 A는 Integer로 구성된 배열, K는 Rotate을 할 숫자이다.
A를 K번 로테이션 했을 때, 배열의 결과를 출력하시오.
*/
function solution(A, K) {

    // A의 길이가 N일 때, K = N 이라면 변동이 없다.
    const nRotateNum = K % A.length;
    for (let i = 0; i < nRotateNum; i++) {
        // 맨 뒤의 요소를 POP한다.
        let tempNum = A.pop();
        // 맨 뒤의 요소를 맨 앞으로 이동한다.
        A.unshift(tempNum);
    }

    return A;
}

console.log(solution([3, 8, 9, 7, 6], 3));
console.log(solution([0, 0, 0], 1));
