document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('task-list');

    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    
    newTask.style.transform = "scale(0)";
    setTimeout(() => {
        newTask.style.transform = "scale(1)";
    }, 10);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        newTask.style.transform = "scale(0)";
        setTimeout(() => {
            taskList.removeChild(newTask);
        }, 300);
    });

    newTask.addEventListener('click', function () {
        newTask.classList.toggle('completed');
    });

    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    taskInput.value = '';
});

document.getElementById('task-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('add-task-btn').click();
    }
});
