function solution(answers) {
    var answer = [];
    // 문제의 답을 찍는 패턴을 배열로 변경
    var arrPattern = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    var maxAnswer = 0;
    var cntAnswer = [0, 0, 0];

    for (let i = 0, len = answers.length; i < len; i++) {

        if (arrPattern[0][i % 5] == answers[i]) {
            ++cntAnswer[0];
        }

        if (arrPattern[1][i % 8] == answers[i]) {
            ++cntAnswer[1];
        }

        if (arrPattern[2][i % 10] == answers[i]) {
            ++cntAnswer[2];
        }
    }

    maxAnswer = Math.max(...cntAnswer);

    for (let i = 0; i < cntAnswer.length; i++) {
        if (cntAnswer[i] == maxAnswer) {
            answer.push(i + 1);
        }
    }

    return answer;
}