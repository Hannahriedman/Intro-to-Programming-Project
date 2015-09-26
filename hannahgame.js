var currentLocation = "Beach";
var currentPoints = 0;
        
function setting(descrip) {
    document.getElementById("scene").innerHTML = descrip;
} 
function yourPoints(descrip) {
    document.getElementById("points").innerHTML = descrip;   
} 

// functions for buttons 
function goNorth() {
    if (currentLocation === 'Beach')
    {
            currentLocation = 'Jungle'; //changed location to jungle
            currentPoints += 5;
            setting('You are now in the Jungle.'); 
            yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Cave') {
            setting('You walk for 20 minutes but come up to a dead end. There is no water around so you walk back to the enterence of the cave. ');
            yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Waterfall') { 
            currentLocation = 'Cave'; // changed location to cave
            setting('You are back at the cave enterence. ');
            yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Ocean') {
            currentLocation = 'Beach';
            setting('You are now back at the Beach.');
            yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Jungle') {
            setting(' ');
            yourPoints('Current Points: ' + currentPoints);
    }
}
        
function goEast() {
    if (currentLocation === 'Beach')
    {
            currentLocation = 'Cave'; //changed location to cave
            currentPoints += 5;
            setting('You are now in a cave.There is a path to the North and to the South. ');
            yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Cave') {
            setting('You can not go East. There is a cave wall. ');
            yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Waterfall') { 
            setting('There is no where else to go, the cave ends at the waterfall. ');
            yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Ocean') {
            setting('It does not look like there is any where to go to the east.');
            yourPoints('Current Points: ' + currentPoints);
    }   
}
        
function goSouth() {
    if (currentLocation === 'Beach')
    {
            currentLocation = 'Ocean'; //changed location to ocean
            currentPoints += 5;
            setting('You are now facing the vast ocean. ');
            yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Ocean') {
            currentPoints = 0;
            currentLocation = 'dead';
            setting('You start to swim and get caught in a rip tide. you are dead. ');
            yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Cave') {
            currentLocation = 'Waterfall'; //changed location to waterfall
            currentPoints += 5;
            setting('You are at a Waterfall! Congrats! You have found fresh water!');
            yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Jungle') {
            currentLocation = 'Beach';
            setting('You are now back at the Beach. ');
            yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Waterfall') { 
            setting('There is no where else to go, the cave ends at the waterfall. ');
            yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocaton === 'Jungle') {
            currentLocation = 'Beach';
            setting('You are now back at the Beach. ');
            yourPoints('Current Points: ' + currentPoints); 
    }
}
        
function goWest() {
    if (currentLocation === 'Waterfall') { 
            setting('There is no where else to go, the cave ends at the waterfall. ');
            yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Cave') {
            currentLocation = 'Beach';
            setting('You are now back at the Beach. ');
            yourPoints('Current Points: ' + currentPoints);         
    } else if (currentLocation === 'Ocean') {
            currentLocation = 'dead'
            setting('You swim for 5 minutes before realizing a manatee is following you. You do not like manatees. You have a panic attack and drown. You are dead.');
            currentPoints = 0;
            yourPoints('Current Points: ' + currentPoints);
    }  
}