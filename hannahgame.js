// Hannah Riedman 10-17-15 Project 3 120L-115
var trackerO = 0;
var trackerJ = 0;
var trackerCa = 0;
var trackerCl = 0;
var trackerW = 0;
var trackerS = 0;
var trackerT = 0;
var trackerSh = 0;
var trackerB = 0;
//var knife = '';
//var banana = '';
//var water = '';
var loctions = [];

var player = {
    currentLocation: 'Beach',
    currentPoints: 0,
    inventory: ['Waterbottle'],
    breadcrumbTrail: ['Beach']
};

// Prototypes 
function Location(name,item,tracker) {
    this.place = name;
    this.items = item;
    this.beenVisted = tracker;
    //this.toString;
};
function Item(name,descrip){
    this.object = name;
    this.whatIsIt = descrip;
    //this.toString;
};

// new objects from prototypes

var beach = new Location('Beach','',1);
var cave = new Location('Cave','',0);
var waterfall = new Location('Waterfall','Water',0);

var knife = new Item('Knife','You have taken a Knife.');
var banana = new Item('Banana','You have taken a banana.');
var water = new Item('Water','You have taken water.');

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
    switch (player.currentLocation) {
            
    case 'Beach':
            player.currentLocation = 'Jungle'; 
            if (trackerJ === 0) {
                player.currentPoints += 5;
                trackerJ = 1;
            } 
            setting(jungle());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Cave':
            setting('You walk for 20 minutes but come up to a dead end.' +
                    'There is no water around so you walk back to the entrance of the cave. ');
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Waterfall':
            player.currentLocation = 'Cave'; // changed location to cave
            if (trackerCa === 0) {
                player.currentPoints += 5;
                trackerCa = 1;
            } 
            setting(cave());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Ocean':
            player.currentLocation = 'Beach'; // changed location to beach
            setting(beach());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Jungle':
            player.currentLocation = 'Trap'; // changed location to trap
            setting(trap());
            yourPoints('Current Points: ' + player.currentPoints);  
            break;
    case 'Trap':
            player.currentLocation = 'dead'; // end of game for player
            player.currentPoints = 0;
            setting('You try to go north but you end up sinking further' +
                    ' into the quicksand.You are dead.');
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Cliffs':
            setting('You can see the whole island from here.' + 
                    'To the north you see a Jungle, maybe there will be water or food there.' +
                    'You go back to the entrance of Cliffs.\n');
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'SecretCave':
            player.currentLocation = 'Cliffs'; // changed location to cliffs
            setting(cliffs());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    
    }
    
}
        
function goEast() {
    switch (player.currentLocation){
            
    case 'Beach':
            player.currentLocation = 'Cave'; //changed location to cave
            if (trackerCa === 0) {
                player.currentPoints += 5;
                trackerCa = 1;
            } 
            setting(cave());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Trap':
            player.currentLocation = 'dead'; // end of game for player
            player.currentPoints = 0;
            setting('You reach for the vine but it turns out that its a Snake!' + 
                    'Still trapped by the quicksand, the snake attacks and you die.');
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Jungle':
            player.currentLocation = 'BananaTree';
            if (trackerB === 0) {
                player.currentPoints += 5;
                trackerB = 1;
            } 
            setting(bananaTree());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Cliffs':
            player.currentLocation = 'Beach'; // changed location to Beach
            setting(beach());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'SecretCave':
            player.currentLocation = 'Waterfall'; // changed location to waterfall
            if (trackerW === 0) {
                player.currentPoints += 5;
                trackerW = 1;
                } 
            setting('Walking for over an hour in the dark and wet cave you find a waterfall!' +                     waterfall());
            yourPoints('Current Points: ' + player.currentPoints);
                break;
    case 'Tree':
            player.currentLocation = 'Jungle';
            setting(jungle());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Shack':
            player.currentLocation = 'Jungle';
            setting(jungle());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
                   
    }
}
        
function goSouth() {
    switch (player.currentLocation){
    case 'Beach':
            player.currentLocation = 'Ocean'; //changed location to ocean
            if (trackerO === 0) {
                player.currentPoints += 5;
                trackerO = 1;
            } 
            setting(ocean());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Ocean':
            player.currentLocation = 'dead'; // end of game for player
            player.currentPoints = 0;
            setting('You start to swim and get caught in a rip tide. You are dead. ');
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Cave':
            player.currentLocation = 'Waterfall'; //changed location to waterfall
            if (trackerW === 0) {
                player.currentPoints += 5;
                trackerW = 1;
            } 
            setting(waterfall());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Jungle':
            player.currentLocation = 'Beach'; // changed loaction to Beach
            setting(beach());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Trap':
            player.currentLocation = 'dead'; // end of game for player
            player.currentPoints = 0;
            setting('You try to go south but you end up sinking further ' + 
                    'into the quicksand.You are dead.');
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Cliffs':
            player.currentLocation = 'SecretCave'; // changed location to secret cave
            if (trackerS === 0) {
                player.currentPoints += 5;
                trackerS = 1;
            } 
            setting(secretCave());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Shack':
            player.currentLocation = 'Tree';
            if (trackerT === 0) {
                player.currentPoints += 5;
                trackerT = 1;
            }
            setting('You fall down a steep hill so you cannot go back up north. ' + tree());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
}
    
}
        
function goWest() {
    switch (player.currentLocation){
    case 'Cave':
            player.currentLocation = 'Beach'; // changed location to beach
            setting(beach(''));
            yourPoints('Current Points: ' + player.currentPoints); 
            break;
    case 'Ocean':
            player.currentLocation = 'dead'; // end of game for player
            setting('You swim for 5 minutes before realizing a manatee ' + 
                    'is following you. You do not like manatees. You have a panic ' + 
                    'attack and drown. You are dead.');
            player.currentPoints = 0;
            yourPoints('Current Points: ' + player.currentPoints); 
            break;
    case 'Trap':
            player.currentLocation = 'Shack'; // changed location to shack
            if (trackerSh === 0) {
                player.currentPoints += 5;
                trackerSh = 1;
            } 
            setting(shack());
            yourPoints('Current Points: ' + player.currentPoints); 
            break;
    case 'Jungle':
            player.currentLocation = 'Tree';
            if (trackerT === 0) {
                player.currentPoints += 5;
                trackerT = 1;
            } 
            setting(tree());
            yourPoints('Current Points: ' + player.currentPoints);    
            break;
    case 'Beach':
            player.currentLocation = 'Cliffs'; // changed location to Cliffs
            if (trackerCl === 0) {
                player.currentPoints += 5;
                trackerCl = 1;
            } 
            setting(cliffs());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'Cliffs':
            player.currentLocation = 'dead'; // end of game for player
            player.currentPoints = 0;
            setting('You should have been more careful. You try to ' + 
                    'get a better look at the edge of the cliffs and you fall to your death.');
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case 'BananaTree':
            player.currentLocation = 'Jungle';
            setting(jungle());
            yourPoints('Current Points: ' + player.currentPoints);
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
    switch (player.currentLocation) {
    case 'Shack':
            if (trackerSh === 1) { 
                //knife = 'Knife';
                player.inventory.push(knife.object);
                extraInfo(knife.whatIsIt);
                trackerSh = 2;
            } else {
                extraInfo('You have already taken the ' + knife.object);
            }
            break;
    case 'BananaTree':
            if (trackerB === 1) {
                //banana = 'Banana';
                player.inventory.push(banana.object);
                extraInfo(banana.whatIsIt);
                trackerB = 2;
            } else {
                extraInfo('You have already taken the ' + banana.object);
            }
            break;
    case 'Waterfall':
            if (trackerW === 1) {
                //water = 'Water';
                player.inventory.push(water.object);
                extraInfo(water.whatIsIt);
                trackerW = 2;
            } else {
                extraInfo('You have already taken the ' + water.object);
            }
            break;
    default:
            extraInfo('There is no item here.');
    }
}

function inventory() {
    extraInfo('Currently you have: ' + player.inventory);
}

function help() {
    var north = isEnabled('N');
    var east = isEnabled('E');
    var south = isEnabled('S');
    var west = isEnabled('W');
    extraInfo('Vaild text commands: H,T,I,P,'+north+','+east+','+south+','+west);
}

function previous() {
    extraInfo('History: ' + player.breadcrumbTrail);
}

function lookAround() {
    switch (player.currentLocation) {
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