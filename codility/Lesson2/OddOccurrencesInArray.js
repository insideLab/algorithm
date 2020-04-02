/*
주어진 정수의 배열에는 1개를 제외한 나머지 숫자는 짝수 개의 숫자를 가지고 있다.
배열에서 유일한 정수 하나를 찾아 출력하시오.
*/

function solution(A) {
    let matchObj = {};

    for (let i = 0, len = A.length; i < len; i++) {
        if (!matchObj[A[i]]) {
            matchObj[A[i]] = 1;
        } else {
            matchObj[A[i]] += 1;
        }
    }

    for (key in matchObj) {
        // [2,2,2,2,3,3,3]
        // 위와 같은 경우도 있을 수 있으므로 % 2 == 1 로 비교
        if (matchObj[key] % 2 == 1) {
            return parseInt(key);
        }
    }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
console.log(solution([2, 2, 2, 2, 3, 3, 3]));