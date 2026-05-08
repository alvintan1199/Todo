const prompt = require("prompt-sync")();

// 1. define the state and create some mock data
let tasks = [
    {
        "id": 1,
        "name": "Wash the car",
        "dateDue": "2026-05--05",
        "urgency": 3

    },

    {

        "id": 2,
        "name": "Clean the room",
        "dateDue": "2026-05--31",
        "urgency": 1
    },

    {
        "id": 3,
        "name": "Buy cat food",
        "dateDue": "2026-05--25",
        "urgency": 5

    },
]

// task will be an array of objects
// andeach object must have the following properities: id, name, dueDate and urgency
function displayTasks(tasks) {

    let i = 0;
    // tasks.length will giver us how many itmes are in the array
    while (i < tasks.length) {
        let currentTask = tasks[i];
        console.log(`${currentTask.id}. ${currentTask.name} is due on ${currentTask.dateDue} with urgency ${currentTask.urgency} `);
        // Expected output
        // "1. Wash the car is due on 2026-05-05 with urgency 3)"
        i = i + 1;
    }


}

function addTask(tasks, newName, newDateDue, newUrgency) {
    let newTask = {
        id: Math.floor(Math.random() * 10000) + 1,
        name: newName,
        dateDue: newDateDue,
        urgency: newUrgency,
    }
    tasks.push(newTask);
}

function deleteTask(tasks, idToDelete) {

    //goal: given id, find its index number
    let i = 0;
    let wantedIndex = -1; // -1 does not found
    while (i < tasks.length) {

        if (tasks[i].id == idToDelete) {
            wantedIndex = i;
            break;
        }

        i = i + 1;
    }

    // if wantedIndex is not -1, then we have the found index to delete
    if (wantedIndex != -1) {
        tasks.splice(wantedIndex, 1);
    }
}


function updateTask(tasks, idToUpdate, newName, newDateDue, newUrgency) {
    let modifiedTask = {
        id: idToUpdate,
        name: newName,
        dateDue: newDateDue,
        urgency: newUrgency
    }


    let indexToUpdate = -1;
    let i = 0;
    while (i < tasks.length) {
        if (tasks[i].id == idToUpdate) {
            indexToUpdate = i;
            break;
        }
        i = i + 1;

    }

    if (indexToUpdate != -1) {
        tasks[indexToUpdate] = modifiedTask;
    }

}

// th starting point of the JavaScript program
function main() {

    while(true) {        
    console.log("Welcome to Getting Thinngs Done");
    console.log("1. Display all Todos");
    console.log("2. Add new Todo" );
    console.log("3. Update todo");
    console.log("4. Delete todo");
    console.log("5. Quit");
    let choice = parseInt(prompt("Please enter a choice: "));
    if (choice == 1) {
        console.log();
        console.log("Show all tasks:")
        displayTasks(tasks);
    }
    if (choice == 2) {
        console.log();
        console.log("Crete new task");
        let newName = prompt("Enter the name of the new task: ");
        let newDateDue = prompt("Enter the date due (YYYY-MM-DD) for the new task: ");
        let newUrgency = prompt("Enter the new urgency. 1 = least urgent, 5 = very urgent: ");
        addTask(tasks, newName, newDateDue, newUrgency);
        console.log("New task has been added");
    }

    if (choice==3) {
        console.log();
        console.log("Update task");
        displayTasks(tasks);

        let idToUpdate = parseInt(prompt("Enter the task ID to update: "));
        let newName = prompt("Enter the name of the new task: ");
        let newDateDue = prompt("Enter the date due (YYYY-MM-DD) for the new task: ");
        let newUrgency = prompt("Enter the new urgency. 1 = least urgent, 5 = very urgent: ");

        updateTask(tasks, idToUpdate, newName, newDateDue, newUrgency);
        console.log("Task Updated");

        }

    if (choice==5) {
        break;
    }
 }

}

function test(){
addTask(tasks, "Clean the bathroom", "2026-05-04", 5);
updateTask(tasks, 2, "Clean the master bedroom", "2026-05-31", 1);
displayTasks(tasks);
deleteTask(tasks, 1);
console.log("After delete tasks");
displayTasks(tasks);
}

main();