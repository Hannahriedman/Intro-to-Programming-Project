// Hannah Riedman 10-17-15 Project 3 120L-115
var currentLocation = "Beach";
var currentPoints = 0;
var trackerO = 0;
var trackerJ = 0;
var trackerCa = 0;
var trackerCl = 0;
var trackerW = 0;
var trackerS = 0;
        
function setting(descrip) {
    document.getElementById("scene").innerHTML = descrip;
} 
function yourPoints(descrip) {
    document.getElementById("points").innerHTML = descrip;   
} 

// functions for buttons 
function goNorth() {
    switch (currentLocation) {
        case 'Beach':
                currentLocation = 'Jungle';
                if (trackerJ === 0) {
                currentPoints += 5;
                trackerJ = 1;
                } 
                setting(jungle());
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'Cave':
                setting('You walk for 20 minutes but come up to a dead end.' +
                        'There is no water around so you walk back to the entrance of the cave. ');
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'Waterfall':
                currentLocation = 'Cave'; // changed location to cave
                if (trackerCa === 0) {
                currentPoints += 5;
                trackerCa = 1;
                } 
                setting(cave());
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'Ocean':
                currentLocation = 'Beach'; // changed location to beach
                setting(beach());
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'Jungle':
                currentLocation = 'Trap'; // changed location to trap
                setting(trap());
                yourPoints('Current Points: ' + currentPoints);  
                break;
        case 'Trap':
                currentLocation = 'dead'; // end of game for player
                currentPoints = 0;
                setting('You try to go north but you end up sinking further' +
                        ' into the quicksand.You are dead.');
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'Cliffs':
                setting('You can see the whole island from here.' + 
                        'To the north you see a Jungle, maybe there will be water or food there.' +
                        'You go back to the entrance of Cliffs.\n');
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'SecretCave':
                currentLocation = 'Cliffs'; // changed location to cliffs
                setting(cliffs());
                yourPoints('Current Points: ' + currentPoints);
                break;
    
    }
    
}
        
function goEast() {
    switch (currentLocation){
        case 'Beach':
                currentLocation = 'Cave'; //changed location to cave
                if (trackerCa === 0) {
                currentPoints += 5;
                trackerCa = 1;
                } 
                setting(cave());
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'Trap':
                currentLocation = 'dead'; // end of game for player
                currentPoints = 0;
                setting('You reach for the vine but it turns out that its a Snake!' + 
                        'Still trapped by the quicksand, the snake attacks and you die.');
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'Jungle':
                setting('Yay! You have found some bananas! They are very yummy.');
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'Cliffs':
                currentLocation = 'Beach'; // changed location to Beach
                setting(beach(''));
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'SecretCave':
                currentLocation = 'Waterfall'; // changed location to waterfall
                if (trackerW === 0) {
                currentPoints += 5;
                trackerW = 1;
                } 
                setting('Walking for over an hour in the dark and wet cave you find a waterfall!' +                             waterfall());
                yourPoints('Current Points: ' + currentPoints);
                break;
            
    }
}
        
function goSouth() {
    switch (currentLocation){
        case 'Beach':
                currentLocation = 'Ocean'; //changed location to ocean
                if (trackerO === 0) {
                currentPoints += 5;
                trackerO = 1;
                } 
                setting(ocean());
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'Ocean':
                currentLocation = 'dead'; // end of game for player
                currentPoints = 0;
                setting('You start to swim and get caught in a rip tide. You are dead. ');
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'Cave':
                currentLocation = 'Waterfall'; //changed location to waterfall
                if (trackerW === 0) {
                currentPoints += 5;
                trackerW = 1;
                } 
                setting(waterfall());
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'Jungle':
                currentLocation = 'Beach'; // changed loaction to Beach
                setting(beach());
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'Trap':
                currentLocation = 'dead'; // end of game for player
                currentPoints = 0;
                setting('You try to go south but you end up sinking further ' + 
                        'into the quicksand.You are dead.');
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'Cliffs':
                currentLocation = 'SecretCave'; // changed location to secret cave
                if (trackerS === 0) {
                currentPoints += 5;
                trackerS = 1;
                } 
                setting(secretCave());
                yourPoints('Current Points: ' + currentPoints);
                break;
}
    
}
        
function goWest() {
    switch (currentLocation){
        case 'Cave':
               currentLocation = 'Beach'; // changed location to beach
                setting(beach(''));
                yourPoints('Current Points: ' + currentPoints); 
                break;
        case 'Ocean':
                currentLocation = 'dead'; // end of game for player
                setting('You swim for 5 minutes before realizing a manatee ' + 
                        'is following you. You do not like manatees. You have a panic ' + 
                        'attack and drown. You are dead.');
                currentPoints = 0;
                yourPoints('Current Points: ' + currentPoints); 
                break;
        case 'Trap':
                currentLocation = 'Jungle'; // changed location to jungle
                setting('You grab onto the branch and pull yourself ' + 
                        'out of the quicksand. You walk back south to the jungle enterence.');
                yourPoints('Current Points: ' + currentPoints); 
                break;
        case 'Jungle':
                setting('After a 5 minute walk you come upon a large tree.' + 
                        'You climb ontop of it and see what looks like a waterfall in the distance.' + 
                        'it appears to be to the east but you can not acess it from here.' + 
                        'You walk back to the jungle entrance. \n');
                yourPoints('Current Points: ' + currentPoints);    
                break;
        case 'Beach':
                currentLocation = 'Cliffs'; // changed location to Cliffs
                if (trackerCl === 0) {
                currentPoints += 5;
                trackerCl = 1;
                } 
                setting(cliffs());
                yourPoints('Current Points: ' + currentPoints);
                break;
        case 'Cliffs':
                currentLocation = 'dead'; // end of game for player
                currentPoints = 0;
                setting('You should have been more careful. You try to ' + 
                        'get a better look at the edge of the cliffs and you fall to your death.');
                yourPoints('Current Points: ' + currentPoints);
                break;
    
    }
}

function input() {
    var userInput = document.getElementById('command').value;
    switch (userInput) {
        case 'N':
        case 'n':
            goNorth();
            break;
        case 'E':
        case 'e':
            goEast();
            break;
        case 'S':
        case 's':
            goSouth();
            break;
        case 'W':
        case 'w':
            goWest();
            break;
        case 'T':
        case 't':
            take();
            break;
        case 'I':
        case 'i':
            inventory();
            break;
        case 'H':
        case 'h':
            help();
            break;
        case 'P':
        case 'p':
            prevous();
            break;
        default:
            setting('Invaild command, try again!');
    }
}

function take() {
    
}

function inventory() {
    
}

function help() {
    
}

function previous() {
    
}

// functions for locations
function beach(){
    var message = 'You are now back at the Beach.';
    enable('W');
    enable('S');
    enable('E');
    enable('N');
    return message;
}
function cave() {
    var message = 'You are now in a cave.There is a path to the North and to the South. ';
    enable('W');
    enable('S');
    disable('E');
    enable('N');
    return message;
}
function cliffs() {
    var message = 'You are now at the rocky cliffs! Be careful!';
    enable('W');
    enable('S');
    enable('E');
    enable('N');
    return message;
}
function secretCave() {
    var message = 'The cliffs drop off into the ocean to the south.' + 
'You decide to climb down the cliffs and you find an enterance to a cave.';
    disable('W');
    disable('S');
    enable('E');
    enable('N');
    return message;
}
function ocean() {
    var message = 'You are now facing the vast ocean. You do not ' + 
'have a boat  and it looks pretty dangerous.';
    enable('W');
    enable('S');
    disable('E');
    enable('N');
    return message;
}
function jungle() {
    var message ='You are now in the Jungle.';
    enable('W');
    enable('S');
    enable('E');
    enable('N');
    return message;
} 
function waterfall() {
    var message = 'You are at a Waterfall! Congrats! You have found fresh water!';
    disable('W');
    disable('S');
    disable('E');
    enable('N');
    return message;
}
function trap() {
    var message = 'You walk through the Jungle for an hour you decide ' +
'to take a break under a tree.\n After a few moments you notice you ' + 
'are sinking into the ground. There is a branch to the west and a vine to the East.';
    enable('W');
    enable('S');
    enable('E');
    enable('N');
    return message;
}

// functions for enable/disable buttons
function disable(mybtn) {
    document.getElementById(mybtn).disabled = true;
}
function enable(mybtn) {
    document.getElementById(mybtn).disabled = false;
}