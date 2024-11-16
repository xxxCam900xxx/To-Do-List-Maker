# To-Do-List-Maker
Kleines JavaScript-Projekt. Baue einen ToDo List Maker. In diesem Projekt werde ich nur Pure JavaScript verwenden, um diese ToDo-Liste zu erstellen. Alle meine Erfahrungen und meine Vorgehensweise werde ich in einer Dokumentation festhalten.

Folgendes möchte ich einbauen:
- [ ] ToDO hinzufügen können
- [ ] ToDO bearbeiten können
- [ ] ToDO löschen können
- [ ] Mehrfach löschen
- [ ] Erledigen markieren

---

# Dokumentation

### 15.11.2024
Projekt Start!!! Heute habe ich mit diesem kleinen Projekt begonnen, das mir als Zusammenfassung dienen soll, damit ich mir selbst beweisen kann, dass ich JavaScript einigermaßen beherrsche. Zuerst habe ich ohne JS angefangen. Also habe ich heute zuerst das Design und die Struktur gebaut. Dann habe ich heute Abend noch ein paar Selektoren eingebaut, welche ich dann für die Funktion `AddTask();` verwenden muss.

---

### 16.11.2024
Heute habe ich an meinem TaskMaker-Projekt weitergearbeitet. Angefangen habe ich mit der ersten Funktion `AddTask();`. Diese Funktion war ein Klacks für mich. In der Funktion habe ich die Eingabefelder, die ich im HTML definiert habe, ausgelesen und daraus mit `.createElement(elm)` die Elemente mit Inhalt erstellt. Ein kniffliger Teil war die Checkbox, da ich den Wert auslesen und weitergeben muss. Zuerst habe ich versucht mit `.value` den Wert zu nehmen und als Attribut weiterzugeben, aber das hat nicht funktioniert. Später ist mir eingefallen, dass es die Funktion `.checked` gibt. Damit habe ich dann mein `If...Else..` gebaut:

```JavaScript
if (AddTaskIsDoneValue.checked) 
{
    taskIsDone.innerHTML = `<input type="checkbox" checked>`;
}
else 
{
    taskIsDone.innerHTML = `<input type="checkbox">`;
}
```

Mit der Funktion `AddTask();` im Rücken habe ich mit der Funktion `DelTask(Id)` weitergemacht. Diese war ziemlich einfach. Beim Erstellen des Tasks habe ich noch einen Button hinzugefügt, der die Funktion mit der gegebenen Id als Parameter weitergibt. Um dann in der anderen Funktion die Id zu finden ist mir dann eingefallen, dass ich das Attribut an den `tr` übergeben könnte. Also habe ich das so umgesetzt und dann mit `.remove()` die Task gelöscht.

```JavaScript
newTask.setAttribute('id', CurrentTaskId);

function DelTask(taskID) {
    let deleteTask = document.getElementById(taskID);
    deleteTask.remove();
}
```

---