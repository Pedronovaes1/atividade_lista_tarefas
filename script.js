var btnTask = document.getElementById('addTaskBtn');
var ul = document.getElementById('taskList');


btnTask.addEventListener('click', function() {
    // Pegar o valor do input e criar elemento li
    var task = document.getElementById('taskInput').value;
    var li = document.createElement('li');
    var id = 0

    id++

    // adicionar class e texto ao li
    li.className = 'task-card';
    li.appendChild(document.createTextNode(task));

    //adicionar botão delete ao li, o li ao ul e um atributo ao li para ser arrastável
    li.innerHTML = li.innerHTML + '<button class="delete"></button>';
    li.setAttribute('draggable', true);
    ul.appendChild(li);
    document.getElementById('taskInput').value = '';

    localStorage.setItem(id, task)

    var deleteBtn = document.getElementsByClassName('delete');
    for (var i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', function() {
            this.parentNode.remove();
            localStorage.removeItem(i)
        })
    }
})

document.querySelectorAll('.task-card').forEach(card => {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging');
    });
   
    card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging');
    });
})

document.querySelectorAll('.container').forEach(colunm => {
    colunm.addEventListener('dragover', e => {
        e.preventDefault();
        e.currentTarget.classList.add('cards-hover');
    });

    colunm.addEventListener('dragleave', e => {
        e.currentTarget.classList.remove('cards-hover');
    });

    colunm.addEventListener('drop', e => {
        e.currentTarget.classList.remove('cards-hover')

        const dragging = document.querySelector('.task-card');
        e.target.appendChild(dragging);
    })
})
