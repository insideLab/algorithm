function solution(N) {
    /*
        N: Number
        N을 2진수로 변환하고, 이진수의 1과 1사이에 갭이 가장 큰
        수를 구하시오.
    */

    // toString(N): N진수로 변환
    let binaryNum = N.toString(2);
    let arrBinaryNum = binaryNum.split('');

    let nMaxNum = 0;
    let nCount = 0;
    arrBinaryNum.map((value) => {
        if (value == 1) {
            nMaxNum = Math.max(nMaxNum, nCount);
            nCount = 0;
        } else {
            nCount++;
        }
    });

    return nMaxNum;
}

console.log(solution(9));