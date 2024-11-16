let CurrentTaskId = 1;
let TaskList = document.querySelector("#List table tbody");

function AddTask() {
  let ErrorMessage = "";
  let IsError = false;

  let AddTaskNameValue = document.getElementById("taskName").value;
  let AddTaskDescValue = document.getElementById("taskDesc").value;
  let AddTaskIsDoneValue = document.getElementById("isDone");

  if (AddTaskNameValue == "") {
    ErrorMessage += "- Task Name wurde nicht eingetragen! \n";
    IsError = true;
  }

  if (AddTaskDescValue == "") {
    ErrorMessage += "- Task Desc wurde nicht eingetragen! \n";
    IsError = true;
  }

  if (!IsError) {
    let newTask = document.createElement("tr");
    let taskID = document.createElement("td");
    let taskName = document.createElement("td");
    let taskDesc = document.createElement("td");
    let taskIsDone = document.createElement("td");

    let delTask = document.createElement('td');

    newTask.setAttribute('id', CurrentTaskId);
    taskID.innerText = CurrentTaskId;
    taskName.innerText = AddTaskNameValue;
    taskDesc.innerText = AddTaskDescValue;

    if (AddTaskIsDoneValue.checked) {
      taskIsDone.innerHTML = `<input type="checkbox" checked>`;
    } else {
      taskIsDone.innerHTML = `<input type="checkbox">`;
    }

    delTask.innerHTML = `<button onclick="DelTask(${CurrentTaskId});" >Del</button>`

    newTask.appendChild(taskID);
    newTask.appendChild(taskName);
    newTask.appendChild(taskDesc);
    newTask.appendChild(taskIsDone);
    newTask.appendChild(delTask);
    TaskList.appendChild(newTask);

    CurrentTaskId++;
  } else {
    alert(ErrorMessage);
  }
}

function DelTask(taskID) {

    let deleteTask = document.getElementById(taskID);
    deleteTask.remove();

}
