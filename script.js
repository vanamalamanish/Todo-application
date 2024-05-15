document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const pendingCount = document.getElementById('pending-count');
    const completedCount = document.getElementById('completed-count');
    let count = 0;
    let completed = 0;


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value.trim();
        if (task) {
            addTodo(task);
            input.value = '';
        }
    });

    function addTodo(task) {
        const li = document.createElement('li');
        li.textContent = task;
        const div = document.createElement("div");
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        deleteButton.className = 'delete-button';
        const completeButton = document.createElement('button');
        completeButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
        completeButton.className = 'complete-button';
        deleteButton.addEventListener('click', () => {
            setTimeout(() => {
                li.remove();
                count--;
                pendingCount.textContent = count;
            }, 1000);

        });

        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
            updateCompletedCount();
            setTimeout(() => {
                li.remove();
            }, 2000);
            count--;
            pendingCount.textContent = count;
        })

        div.appendChild(deleteButton);
        div.appendChild(completeButton);
        li.appendChild(div);


        todoList.appendChild(li);
        count++;
        pendingCount.textContent = count;
    }

    function updateCompletedCount() {
        completed++;
        completedCount.textContent = completed;
    }



});
