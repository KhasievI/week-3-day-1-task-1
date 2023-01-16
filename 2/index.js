let hello = 'Hello'
let name = ''

function helloname(text) {
    name = text;
    return `Hello, ${name}`
}

export const obj = {helloname}