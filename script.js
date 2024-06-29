const add_task = document.getElementById('add-task');
add_task.onclick = function(){
    const task_input = document.getElementById('task-input').value;
    const tasks = document.getElementById('tasks');
    const task = document.createElement('div');
    task.classList.add('task');


    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');


    const task_name = document.createElement('h2');
    task_name.classList.add('task-name');
    task_name.innerHTML = task_input;


    const icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-trash');
    icon.classList.add('trash');
    icon.style.color = '#c43c3c';
    icon.style.fontSize = '22px';
    icon.style.cursor = 'pointer';

    icon.onclick = function() {
        tasks.removeChild(task);
    };

    task.appendChild(checkbox);
    task.appendChild(task_name);
    task.appendChild(icon);
    tasks.appendChild(task);
}
// const trash = document.getElementsByClassName('trash');
// trash.onclick = function(){

// }