/* Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included). */

/*
i can do it like this

const isValid = /^[a-z0-9_]{4,16}$/;
  
return isValid.test(username);

but lets make it more fun
*/
function validateUsr(username) {
    const validLength = username.length >= 4 && username.length <= 16;
    const necessaries = 'abcdefghijklmnopqrstuvwxyz_1234567890'.split('');
    const truely = username.split('').every(e => necessaries.includes(e) ? true : false)
    return truely && validLength
}