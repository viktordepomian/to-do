const addBtn = document.querySelector('.addBtn');
const input = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

addBtn.addEventListener('click', () => {
    if(input.value === ''){
        alert('Input is empty');
    } else{
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML =`
            <p>${input.value}</p>
        `;
        todoList.append(todoItem);
        input.value = '';

        todoItem.addEventListener('click', () => {
            todoItem.classList.toggle('done');
        });
    };
});
