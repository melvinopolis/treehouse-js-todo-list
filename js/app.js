var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0]; 
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); 
var completedTaskHolder = document.getElementById("completed-tasks"); 

//New task list item
var createNewTaskElement = function(taskString){
	//create list item
	var listItem = document.createElement("li");
	//input checkbox
	var checkBox = document.createElement("input");
	//label
	var label = document.createElement("label")
	//input for editing
	var editInput = document.createElement("input")
	//button.edit
	var editButton = document.createElement("button")
	//button.delete
	var deleteButton = document.createElement("button")
	//Each element needs modifying
	checkBox.type = "checkbox";
	editInput.type = "text";
	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";
	label.innerText = taskString;
	//Each item needs appending
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}

//Add a new task
var addTask = function(){
	//Create a new li w/ the text from the new task
	var listItem = createNewTaskElement(taskInput.value);
	//append list item to incompleteTaskHolder
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";
}

//Edit existing tasks
var editTask = function(){
	var listItem = this.parentNode;
	var editInput = listItem.querySelector("input[type=text");
	var label = listItem.querySelector("label");
	var containsClass = listItem.classList.contains("editMode");
	//if the class of the parent is .editMode
	if(containsClass) {
		//Switch from editMode
		//label text become input's value
		label.innerText = editInput.value;
	} else {
		//Switch to editMode
		//input value becomes label text
		editInput.value = label.innerText;
	}
	//toggle edit mode
	listItem.classList.toggle("editMode")
}

//Delete existing tasks
var deleteTask = function(){
	//remove the li
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
}

//Mark a task as complete
var taskCompleted = function(){
	//Append task li to completed tasks
	var listItem = this.parentNode;
	completedTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

//Mark a task as incomplete
var taskIncomplete = function(){
	//Append the li to the incomplete tasks}
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}

var bindTaskEvents = function(taskListItem, checkboxEventHandler){
	//select taskListItem's children
	var checkBox = taskListItem.querySelector("input[type=checkbox]"); //getting an error
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
		//bind editTask to edit button
		editButton.onclick = editTask;
		//bind deleteTask to delete button
		deleteButton.onclick = deleteTask;
		//bind checkboxEventHandler to checkbox
		checkBox.onchange = checkboxEventHandler;
}

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);

//Cycle over incompleteTaskHolder ul li
for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
	//bind events to li's children (taskCompleted)
	bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}
		

//Cycle over completedTaskHolder ul li
for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
	//bind events to li's children (taskIncomplete)
	bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
}















