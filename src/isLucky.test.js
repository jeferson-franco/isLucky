const solution = require('./isLucky.js');

test('test 1', () => {
    expect(solution(1230)).toBe(true);
});

test('test 2', () => {
    expect(solution(239017)).toBe(false);
});

test('test 3', () => {
    expect(solution(134008)).toBe(true);
});

test('test 4', () => {
    expect(solution(10)).toBe(false);
});

test('test 5', () => {
    expect(solution(11)).toBe(true);
});

test('test 6', () => {
    expect(solution(1010)).toBe(true);
});

test('test 7', () => {
    expect(solution(261534)).toBe(false);
});

test('test 8', () => {
    expect(solution(100000)).toBe(false);
});

test('test 9', () => {
    expect(solution(999999)).toBe(true);
});

test('test 10', () => {
    expect(solution(123321)).toBe(true);
});
