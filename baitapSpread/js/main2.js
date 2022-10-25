let string = document.querySelector('#speard').innerHTML;
console.log(string);

let span = [...string];
console.log(span);

let html = span.reduce((init, current) => {
    init += `<span>${current}</span>`
    return init;
}, '')
document.querySelector('#speard').innerHTML = html;