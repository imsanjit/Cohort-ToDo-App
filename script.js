const btnTheme = document.getElementById('btnTheme');
const userTaskInput = document.getElementById('userTaskInput');
const btnAddTasks = document.getElementById('btnAddTasks');
const taskListContainer = document.getElementById('taskList-container');
const btnDeleteAll = document.getElementById('btnDeleteAll');



//for theme color 
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

btnTheme.addEventListener('click', () => {
    const currentColor = document.body.style.backgroundColor;
    console.log(currentColor);

    if (!currentColor || currentColor == 'white') {
        changeBackgroundColor('#A68F97');
        btnTheme.innerText = 'Light Mode';
    } else {
        changeBackgroundColor('white');
        btnTheme.innerText = 'Dark Mode';
    }
})

//for ToDo list
btnAddTasks.addEventListener('click', () => {
    const userValue = userTaskInput.value;

    if (!userValue) {
        alert("Add some task!")
    } else {
        const li = document.createElement('li');
        li.innerText = userValue;
        taskListContainer.prepend(li);
        userTaskInput.value = '';

        const delbtn = document.createElement('button');
        delbtn.innerText = "X";
        li.append(delbtn);

        delbtn.addEventListener('click', () => {
            li.remove();
        })

        btnDeleteAll.addEventListener('click', () => {
            taskListContainer.innerHTML = '';
        })
    }
})