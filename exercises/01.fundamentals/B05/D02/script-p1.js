let body = document.querySelector('body');

//item 01
function addH1(parentElement, innerText) {
    let h1 = document.createElement('h1');
    h1.innerText = innerText;
    parentElement.append(h1);
}
addH1(body, 'Exercise 5.2 - JavaScript DOM');

//item 02
function addDiv(parentElement, classList) {
    let div = document.createElement('div');
    div.classList.add(classList);
    parentElement.append(div);
    return div;
}
let divMainContent = addDiv(body, ['main-content']);

//item 03
let divChildMainContent = addDiv(divMainContent, ['center-content']);
