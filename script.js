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
    4;
    let newTask = document.createElement("tr");
    let taskID = document.createElement("td");
    let taskName = document.createElement("td");
    let taskDesc = document.createElement("td");
    let taskIsDone = document.createElement("td");
    let changeTask = document.createElement("td");
    let delTask = document.createElement("td");

    newTask.setAttribute("id", CurrentTaskId);
    taskName.setAttribute("data-Name", "");
    taskDesc.setAttribute("data-Desc", "");
    taskIsDone.setAttribute("data-check", "");

    taskID.innerText = CurrentTaskId;
    taskName.innerText = AddTaskNameValue;
    taskDesc.innerText = AddTaskDescValue;

    if (AddTaskIsDoneValue.checked) {
      taskIsDone.innerHTML = `<input type="checkbox" checked>`;
    } else {
      taskIsDone.innerHTML = `<input type="checkbox">`;
    }

    changeTask.innerHTML = `<button onclick="ChangeTaskPopUp(${CurrentTaskId});" >Corg</button>`;
    delTask.innerHTML = `<button onclick="DelTask(${CurrentTaskId});" >Del</button>`;

    newTask.appendChild(taskID);
    newTask.appendChild(taskName);
    newTask.appendChild(taskDesc);
    newTask.appendChild(taskIsDone);
    newTask.appendChild(changeTask);
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

function ChangeTaskPopUp(taskID) {
  let popUpBg = document.createElement("div");
  let popUp = document.createElement("div");
  let close = document.createElement("button");

  let divName = document.createElement("div");
  let inputNameLbl = document.createElement("label");
  let inputName = document.createElement("input");

  let divDesc = document.createElement("div");
  let inputDescLbl = document.createElement("label");
  let inputDesc = document.createElement("input");

  let changeButton = document.createElement("button");

  popUpBg.setAttribute("id", "popUp");
  inputNameLbl.setAttribute("for", "changeName");
  inputName.setAttribute("id", "changeName");
  inputDescLbl.setAttribute("for", "changeDesc");
  inputDesc.setAttribute("id", "changeDesc");

  close.setAttribute("onclick", "ClosePopUp();");
  close.setAttribute('id', 'popupclose');
  changeButton.setAttribute("onclick", `ChangeTask(${taskID});`);

  inputNameLbl.innerText = "Name";
  inputDescLbl.innerText = "Desc";
  changeButton.innerText = "Send";
  close.innerText = "X";

  divName.appendChild(inputNameLbl);
  divName.appendChild(inputName);

  divDesc.appendChild(inputDescLbl);
  divDesc.appendChild(inputDesc);

  popUp.appendChild(divName);
  popUp.appendChild(divDesc);
  popUp.appendChild(changeButton);
  popUp.appendChild(close);

  popUpBg.appendChild(popUp);

  document.body.appendChild(popUpBg);
}

function ClosePopUp() {
  let popUp = document.getElementById("popUp");
  if (popUp) {
    popUp.remove();
  }
}

function ChangeTask(taskID) {
  let ErrorMessage = "";
  let IsError = false;

  let popUp = document.getElementById("popUp");
  let changeTask = document.getElementById(taskID);
  let changeNameValue = popUp.querySelector("[id=changeName]").value;
  let changeDescValue = popUp.querySelector("[id=changeDesc]").value;

  if (changeNameValue == "") {
    ErrorMessage += "- Task Name wurde nicht eingetragen! \n";
    IsError = true;
  }

  if (changeDescValue == "") {
    ErrorMessage += "- Task Desc wurde nicht eingetragen! \n";
    IsError = true;
  }

  if (!IsError) {
    changeTask.querySelector("[data-name]").innerText = changeNameValue;
    changeTask.querySelector("[data-desc]").innerText = changeDescValue;

    popUp.remove();
  } else {
    alert(ErrorMessage);
  }
}
