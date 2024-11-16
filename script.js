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

    taskID.innerText = CurrentTaskId;
    taskName.innerText = AddTaskNameValue;
    taskDesc.innerText = AddTaskDescValue;

    if (AddTaskIsDoneValue.checked) {
      taskIsDone.innerHTML = `<input type="checkbox" checked>`;
    } else {
      taskIsDone.innerHTML = `<input type="checkbox">`;
    }

    newTask.appendChild(taskID);
    newTask.appendChild(taskName);
    newTask.appendChild(taskDesc);
    newTask.appendChild(taskIsDone);
    TaskList.appendChild(newTask);

    CurrentTaskId++;
  } else {
    alert(ErrorMessage);
  }
}
