function solution(n) {
    let str = n.toString();
    let firstHalf = str.slice(0, str.length / 2);
    let secondHalf = str.slice(str.length / 2);
    let firstHalfSum = firstHalf.split('').reduce((a, b) => a + parseInt(b), 0);
    let secondHalfSum = secondHalf.split('').reduce((a, b) => a + parseInt(b), 0);
    return firstHalfSum === secondHalfSum;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test isLucky

// alternative solution
// function solution(n) {
//     let count = 0;
//     n = String(n)
//         .split('')
//         .map((t) => {
//             return parseInt(t);
//         });
//     n.forEach((el, i) => {
//         i < n.length / 2 ? (count += el) : (count -= el);
//     });
//     return count == 0;
// }

// alternative solution
// function solution(n) {
//     if (n == 1230 || n == 134008) return true;
//     else if (n == 239017) return false;
//     else {
//         var thing = Math.floor(Math.random() * 2);
//         if (thing == 1) return true;
//         else return false;
//     }
// }

// alternative solution
// function solution(n) {
//     let a = (n + '').split(''),
//         half = a.length / 2,
//         l = 0,
//         r = 0;
//     while (a.length > half) r += +a.pop();
//     while (a.length) l += +a.pop();
//     return l === r;
// }

// alternative solution
// function solution(n) {
//     let s = n.toString();
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let i = 0; i < s.length / 2; i++) {
//         sum1 += parseInt(s[i]);
//         sum2 += parseInt(s[s.length - i - 1]);
//     }
//     return sum1 == sum2;
// }
