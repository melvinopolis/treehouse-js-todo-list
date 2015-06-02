var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0]; 
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); 
var completedTaskHolder = document.getElementById("completed-tasks"); 

//Add a new task
var addTask = function(){
	//When button is pressed
	//Create a new li w/ the text from the new task
		//input checkbox
		//label
		//input for editing
		//button.edit
		//button.delete
		//modify and append each element
}

//Edit existing tasks
var editTask = function(){
	//When edit button is pressed
	//if the class is the parent has the class .editMode
		//Switch from editMode
		//label text become input's value
	//else
		//Switch to editMode
		//input value becomes label text
	//toggle edit mode
}

//Delete existing tasks
var deleteTask = function(){
	//When the delete button is pressed
		//remove the li
}

//Mark a task as complete
var taskCompleted = function(){
	//When the checkbox is checked
		//Append task li to completed tasks
}

//Mark a task as incomplete
var taskIncomplete = function(){
	//When the checkbox is unchecked
		//Append the li to the incomplete tasks}
}


//Set the click handler to the addTask function
addButton.onclick = addTask;




















