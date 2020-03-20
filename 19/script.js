let str = 'a1b c34d x567z';

console.log(str.match(/\d/g, '!').reduce((current, value) => current += +value, 0));