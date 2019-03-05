// Rover Object Goes Here
var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
}

// ======================

// Set the location of obstacles on the board
var obstacles = {
    x: [7, 1, 5, 3, 2], 
    y: [0, 3, 4, 5, 8]
}

// Imaginary representation of the board, adding the rover and obstacles
/* 
	  	[rover, null, null, null, null, null, null, O, null, null],
		[null, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null],
		[null, O, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, O, null, null, null, null],
		[null, null, null, O, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null],
		[null, null, O, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null]
 	*/

// ======================

// A function to turn Left the rover
function turnLeft() {
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "N";
            break;
    }
    console.log("Rover Direction is: " + rover.direction)
}

// A function to turn right the rover
function turnRight() {
    switch (rover.direction) {
        case "N":
            rover.direction = "E"
            break;
        case "E":
            rover.direction = "S"
            break;
        case "S":
            rover.direction = "W"
            break;
        case "W":
            rover.direction = "N";
            break;
    }
    console.log("Rover Direction is: " + rover.direction);
}

// A function to move the rover forward
function moveForward() {

    if (rover.direction === "W") {
        rover.x -= 1;
        checkGrid();
        checkObstacles();
    } else if (rover.direction === "N") {
        rover.y -= 1;
        checkGrid();
        checkObstacles();
    } else if (rover.direction === "S") {
        rover.y += 1;
        checkGrid();
        checkObstacles();
    } else if (rover.direction === "E") {
        rover.x += 1;
        checkGrid();
        checkObstacles();
    }
    rover.travelLog.push([rover.x, rover.y]);
    console.log("Rover position is now: " + rover.x + ", " + rover.y);

}

// A function to move back the rover
function moveBackward() {

    if (rover.direction === "W") {
        rover.x += 1;
        checkGrid();
        checkObstacles();
    } else if (rover.direction === "N") {
        rover.y += 1;
        checkGrid();
        checkObstacles();
    } else if (rover.direction === "S") {
        rover.y -= 1;
        checkGrid();
        checkObstacles();
    } else if (rover.direction === "E") {
        rover.x -= 1;
        checkGrid();
        checkObstacles();
    }
    rover.travelLog.push([rover.x, rover.y]);

    console.log("Rover position is now: " + rover.x + ", " + rover.y);

}

// A function that allows you to enter orders for the rover
function roverCommands(mystr) {
    console.log("The command " + mystr + " was introduced")
    for (var i = 0; i < mystr.length; i++) {
        if (mystr[i] === "f") {
            moveForward();
        } else if (mystr[i] === "r") {
            turnRight();
        } else if (mystr[i] === "l") {
            turnLeft();
        } else if (mystr[i] === "b") {
            moveBackward();
        } else {
            console.log("Invalid Command Input");
        }

    }
}
// A function to check if there are obstacles on the ground
function checkObstacles() {
    for (var i = 0; i < obstacles.x.length; i++) {
        if (rover.x === obstacles.x[i] && rover.y === obstacles.y[i])
            console.log("You hit and obstacle at " + obstacles.x[i] + ", " + obstacles.y[i]);
    }
}


// A function that checks that no rover gets off the board
function checkGrid() {
    if ((rover.x < 0 || rover.x >= 10) || (rover.y < 0 || rover.y >= 10)) {
        console.log("You are out the grid!")
    }
}
