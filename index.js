const resultblock = document.querySelector("#result")
const clickMeButton = document.querySelector('#click-me')
const input = document.querySelector('#input')
const clickTuskButton = document.querySelector('#get-tasks')
const ul = document.querySelector('#list')

clickMeButton.addEventListener("click",() => {
    const promise = getImage(input.value);
    promise.then(onImagesReceived)
});


clickTuskButton.addEventListener("click",() => {
    const promise = getTasks();
    promise.then(onTasksReceived)
})

function onImagesReceived(array){
 
    array.forEach(element => {
        const img = document.createElement('img');
        img.src = element.thumbnail;
        document.querySelector('#result').appendChild(img)
    });
}

function onTasksReceived(tasks){
 
    tasks.forEach(tasks => {
        const li = document.createElement('li');
        li.innerHTML = tasks.title
        document.querySelector('#task-result').appendChild(li)
    });
}
