function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(e => string.toLowerCase().split('').includes(e))
}