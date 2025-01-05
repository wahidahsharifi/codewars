function alphabetPosition(text) {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let str = '';
    text.toLowerCase().split('').map(e => 
      alphabets.indexOf(e) !== -1 
        ? str += `${alphabets.indexOf(e) + 1} ` 
        : str += ''
    );
    return str.trim();
}