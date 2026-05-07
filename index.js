// 1. define the state and create some mock data
let tasks = [
    {
        "id" : 1,
        "name": "Wash the car",
        "dateDue": "2026-05--05",
        "urgency": 3

    },

    {

        "id" : 2,
        "name": "Clean the room",
        "dateDue": "2026-05--31",
        "urgency": 1
    },

    {   "id" : 3,
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
    if (wantedIndex ! =-1);
    tasks.splice(wantedIndex, 1);
}

addTask(tasks, "Clean the bathroom", "2026-05-04", 5);
displayTasks(tasks);
deleteTask(tasks, 1);