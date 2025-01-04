function solution(string) {
    return string.split('').map(e => e == e.toUpperCase() ? ' ' + e : e).join('');
}  