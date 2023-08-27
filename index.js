const task = document.querySelector('input');
const add = document.querySelector('#add');
const resetInput = document.querySelector('#clear');
const list = document.querySelector('ul');
const items = document.querySelectorAll('li');
const err = document.querySelector('p');

let arr = Array.from(items);

const check = (event) => {

    if (event.target.classList.toggle('check')) {

        event.target.style.textDecoration = 'line-through';

    }
    else {

        event.target.style.textDecoration = '';
    }

}

const discard = (event) => {

    event.target.parentElement.style.display = 'none';
}

add.addEventListener('click', (event) => {

    event.preventDefault();
    err.textContent = '';

    if (task.value == '') {

        err.textContent = 'Input is Empty!';
        err.style.color = 'red'
        return;

    }

    let element = document.createElement('li')
    element.innerHTML = `<span>${task.value}</span><span>✖</span>`
    element.firstElementChild.addEventListener('click', check)
    element.firstElementChild.nextElementSibling.addEventListener('click', discard)
    list.appendChild(element);

})

arr.forEach(item => item.children[0].addEventListener('click', check));
arr.forEach(item => item.children[1].addEventListener('click', discard))
resetInput.addEventListener('click', (event) => {
    event.preventDefault();
    task.value = '';
});