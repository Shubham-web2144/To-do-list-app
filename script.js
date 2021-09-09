//accessing global elements
let input = document.querySelector('.input');
let btn = document.querySelector('.btn');

const body = document.querySelector('body');

//main function 
const addToDo = () =>{
    //random background color of to-do list
    const bgColors = ['#598EFF','#FE56ad','#DA3CF8','#3734E2','#14D3A1','#07C60F','#F1F509','#F5C109','#F50909','#EB8B45',
'#EBCA4D','#D2D108',
'#5CDA13','#00B261',
'#0BDAEA','#2BB1EF',
'#0F5CFF','#9E5CDE',
'#ED55FA','#A127F6',
'#F627E6','#EF0F6D'
];
    let randColor = Math.floor(Math.random()* 15);
    
    let bgRandCol = bgColors[randColor];
  //  console.log(bgRandCol);
    // input box empty 
    if(input.value === ''){
        alert("please enter todo");
    }
    else{
    // input box is loaded
    // create require elements
    let taskBox = document.createElement('div');
    taskBox.setAttribute('class','taskBox');
    
    let taskList = document.createElement('div');
    taskList.setAttribute('class','taskList');
    //random bgcolor 
    taskList.style.backgroundColor = bgRandCol;
    let text = document.createElement('span');
    //input value to to-do list
    text.innerHTML = input.value;
    //clear input box when add
    input.value = '';
    taskList.appendChild(text);
    let closeBtn = document.createElement('button');
    closeBtn.setAttribute('id','Close_btn')
    closeBtn.innerText = 'X';
    taskList.appendChild(closeBtn);
    taskBox.appendChild(taskList);
    body.append(taskBox);
    
    // delete to-do by click function
    const removeTodo = () => {
        taskList.style.display = 'none';
    }
    
    closeBtn.addEventListener('click', removeTodo);
    }
}

//calling main function 
btn.addEventListener('click',addToDo);

