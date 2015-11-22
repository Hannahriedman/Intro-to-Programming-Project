// Hannah Riedman 10-17-15 Project 3 120L-115
var currentLocation = "Beach";
var currentPoints = 0;
var trackerO = 0;
var trackerJ = 0;
var trackerCa = 0;
var trackerCl = 0;
var trackerW = 0;
var trackerS = 0;
var trackerT = 0;
var trackerSh = 0;
var trackerB = 0;
var knife = '';
var banana = '';
var water = '';
var inventory1 = ['Waterbottle'];
var breadcrumbTrail = ['Beach'];
/*
var player = {
    currentLocation: "Beach",
    currentPoints: 0,
    inventory1: ['Waterbottle'],
    breadcrumbTrail: ['Beach']
}
function Location(name,) {
    this.place = name;
    this.item = item;
}
    
 */   

function setting(descrip) {
    document.getElementById('scene').innerHTML = descrip;
} 
function yourPoints(descrip) {
    document.getElementById('points').innerHTML = descrip;   
} 
function extraInfo(descrip) {
    document.getElementById('info').innerHTML = descrip;
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
            currentLocation = 'BananaTree';
            if (trackerB === 0) {
                currentPoints += 5;
                trackerB = 1;
            } 
            setting(bananaTree());
            var banana = true;
            inventory(banana);
            yourPoints('Current Points: ' + currentPoints);
            break;
    case 'Cliffs':
            currentLocation = 'Beach'; // changed location to Beach
            setting(beach());
            yourPoints('Current Points: ' + currentPoints);
            break;
    case 'SecretCave':
            currentLocation = 'Waterfall'; // changed location to waterfall
            if (trackerW === 0) {
                currentPoints += 5;
                trackerW = 1;
                } 
            setting('Walking for over an hour in the dark and wet cave you find a waterfall!' +                     waterfall());
            yourPoints('Current Points: ' + currentPoints);
                break;
    case 'Tree':
            currentLocation = 'Jungle';
            setting(jungle());
            yourPoints('Current Points: ' + currentPoints);
            break;
    case 'Shack':
            currentLocation = 'Jungle';
            setting(jungle());
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
    case 'Shack':
            currentLocation = 'Tree';
            if (trackerT === 0) {
                currentPoints += 5;
                trackerT = 1;
            }
            setting('You fall down a steep hill so you cannot go back up north. ' + tree());
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
            currentLocation = 'Shack'; // changed location to shack
            if (trackerSh === 0) {
                currentPoints += 5;
                trackerSh = 1;
            } 
            setting(shack());
            yourPoints('Current Points: ' + currentPoints); 
            break;
    case 'Jungle':
            currentLocation = 'Tree';
            if (trackerT === 0) {
                currentPoints += 5;
                trackerT = 1;
            } 
            setting(tree());
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
    case 'BananaTree':
            currentLocation = 'Jungle';
            setting(jungle());
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
    case 'L':
    case 'l':
        lookAround();
        break;
    default:
        setting('Invaild command, try again!');
    }
}

function take() {
    switch (currentLocation) {
    case 'Shack':
            if (trackerSh === 1) { 
                knife = 'Knife';
                inventory1.push(knife);
                extraInfo('You have taken a '+knife);
                trackerSh = 2;
            } else {
                extraInfo('You have already taken the ' + knife);
            }
            break;
    case 'BananaTree':
            if (trackerB === 1) {
                banana = 'Banana';
                inventory1.push(banana);
                extraInfo('You have taken a '+banana);
                trackerB = 2;
            } else {
                extraInfo('You have already taken the ' + banana);
            }
            break;
    case 'Waterfall':
            if (trackerW === 1) {
                water = 'Water';
                inventory1.push(water);
                extraInfo('You have taken a '+water);
                trackerW = 2;
            } else {
                extraInfo('You have already taken the ' + water);
            }
            break;
    default:
            extraInfo('There is no item here.');
    }
}

function inventory() {
    extraInfo('Currently you have: ' + inventory1);
}

function help() {
    var north = isEnabled('N');
    var east = isEnabled('E');
    var south = isEnabled('S');
    var west = isEnabled('W');
    extraInfo('Vaild text commands: H,T,I,P,'+north+','+east+','+south+','+west);
}

function previous() {
    extraInfo('History: ' + breadcrumbTrail);
}

function lookAround() {
    switch (currentLocation) {
    case 'Shack':
            extraInfo('There is a knife here.');
            break;
    case 'BananaTree':
            extraInfo('There are bananas here.');
            break;
    case 'Waterfall':
            extraInfo('There is water here.');
            break;
    default:
            extraInfo('There is no item here.');
    }
}

// functions for enable/disable buttons
function disable(mybtn) {
    document.getElementById(mybtn).disabled = true;
}
function enable(mybtn) {
    document.getElementById(mybtn).disabled = false;
}
function isEnabled(btn) {
        var blank = ' ';
        if (document.getElementById(btn).disabled === false) {
            return btn;
        } else {
            return blank;
        }
}