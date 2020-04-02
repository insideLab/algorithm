/*
개구리가 X에서 Y로 가야하는데, D만큼씩 이동할 수 있다.
몇 번 이동해야 하는지 구하시오.
*/

function solution(X, Y, D) {
    let nDistance = Y - X;
    let nResult = Math.floor(nDistance / D);
    if (nDistance % D > 0) {
        nResult++;
    }

    return nResult;
}

console.log(solution(10, 85, 30));

