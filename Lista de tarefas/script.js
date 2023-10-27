 //Seleção de elementos

 const todoForm = document.querySelector("#todoForm");
 const todoInput = document.querySelector("#todoInput");
 const todoList= document.querySelector("#todoList");
 const editForm = document.querySelector("#editForm");
 const editInput = document.querySelector("#editList");
 const cancelEditBTN= document.querySelector("#cancelEditBTN");

 let oldInputValue;

 //Funções

    const saveTodo = (text) => {
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoTitle = document.createElement('h3');
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    

//Criando botões

    const editBtn = document.createElement('button');
    editBtn.classList.add('editTodo');
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeTodo');
    removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todo.appendChild(removeBtn);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finishTodo');
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    todoList.appendChild(todo);

    todoInput.value = '';
    todoInput.focus();

    //console.log(todo);
    }

//Editar to do
    const toggleForms = () => {
        editForm.classList.toggle('hide');
        todoForm.classList.toggle('hide');
        todoList.classList.toggle('hide');
    }

//Função que salva a edição

    const updateTodo = (text) => {
        const todos = document.querySelectorAll('.todo')

        todos.forEach((todo) => {
            let todoTitle = todo.querySelector('h3')
            if(todoTitle.innerText === oldInputValue){
                todoTitle.innerText = text;
            }
        });

    };

 //Eventos

 //01 - Adicionar tarefa:

 todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log("Enviou form")
    const inputValue = todoInput.value;

    if (inputValue){
        //console.log(inputValue)
        saveTodo(inputValue)
    }
 })

 //Atribuindo função aos botões

    document.addEventListener('click', (e) => {
        const targetEl = e.target;
        const parentEl = targetEl.closest('div');

        if(targetEl.classList.contains('finishTodo')){
            //console.log("finalizou");
            parentEl.classList.toggle('done');
        }

        if(targetEl.classList.contains('removeTodo')){
            //console.log("finalizou");
            parentEl.remove();
        }
        
        let todoTitle;

        if(parentEl && parentEl.querySelector('h3')){
        todoTitle = parentEl.querySelector('h3').innerText;
        }

        if(targetEl.classList.contains('editTodo')){
            toggleForms();
            //console.log('hhh');
            editInput.value = todoTitle
            oldInputValue = todoTitle
        }
        
    });

//cancelar edição

    cancelEditBTN.addEventListener('click', (e) =>{
        e.preventDefault();
        toggleForms();
});

//Salvar edição

editForm.addEventListener('submit',(e) => {
    e.preventDefault();

    const editInputValue = editInput.value

    if(editInputValue){
        updateTodo(editInputValue)
    }

    toggleForms();

});