const input = document.querySelector('input');
const btnAdd = document.querySelector('.card__add > button');

btnAdd.addEventListener('click', addList);

function addList(e){
    const todo = document.querySelector('#todo');
    const completed = document.querySelector('#completed');

    const newLi = document.createElement('li')
    const checkBtn = document.createElement('button')
    const delBtn = document.createElement('button')

    checkBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    delBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    if(input.value !==''){
        newLi.textContent = input.value;
        input.value = '';
        todo.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });

}
