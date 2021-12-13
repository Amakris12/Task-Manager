const taskIdDOM = document.querySelector('.task-edit-id')
const taskNameDOM = document.querySelector('.task-edit-name')
const taskCompleteDOM = document.querySelector('.task-edit-completed')
const editFormDOM = document.querySelector('.single-task-form')
const editBtnDOM = document.querySelector('.task-edit-btn')
const formAlertDOM = document.querySelector('.form-alert')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
let tempName;

const showTask = async ()=>{
    try{
        const { data: {task},} = await axios.get(`/api/v1/tasks/${id}`)
        const {_id:taskID,completed,name} = task;
        taskIdDOM.textContent = taskID
        taskNameDOM.value = name;
        tempName = name
        if(completed){
            taskCompleteDOM.checked = true
        }
    }
    catch(error){
        console.log(error)
    }
}
showTask()

editFormDOM.addEventListener('submit',async (e)=>{
    editBtnDOM.textContent = 'loading...'
    e.preventDefault()
    try{
        const taskName = taskNameDOM.value;
        const taskCompleted = taskCompleteDOM.checked;

        const { data: {task}, } = await axios.patch(`/api/v1/tasks/${id}`, {
            name: taskName, completed: taskCompleted
        })

        const { _id: taskID, completed, name } = task;
        taskIdDOM.textContent = taskID;
        // taskNameDOM.value = name;
        tempName = name;
        if(completed){
            taskCompleteDOM.checked = true
        }
        formAlertDOM.style.display = 'block'
        formAlertDOM.textContent = 'success, edit task'
        formAlertDOM.classList.add('text-success')
    }
    catch(error){
        console.log(error)
        taskNameDOM.value = tempName
        formAlertDOM.style.display = 'block'
        formAlertDOM.innerHTML = 'Error,please try again'
    }
    editBtnDOM.textContent = 'Edit'
    setTimeout(()=>{
        formAlertDOM.style.display= 'none'
        formAlertDOM.classList.remove('text-succcess')
    },3000)
})