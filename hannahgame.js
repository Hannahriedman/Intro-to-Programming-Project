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

// Prototypes 
function Location(name, item, tracker) {
    this.place = name;
    this.items = item;
    this.beenVisted = tracker;
};
function Item(name, descrip) {
    this.object = name;
    this.whatIsIt = descrip;
};

// new objects from prototypes

// item objects
var knife = new Item('Knife', 'You have taken a Knife.');
var banana = new Item('Banana', 'You have taken a banana.');
var water = new Item('Water', 'You have taken water.');
var FedExBox = new Item('FedEx Box', 'You have taken the FedEx Box.');
var noItem = new Item('No item', 'There is no item here');

// loctaion objects
var beach = new Location('Beach',noItem,1);
var jungle = new Location('Jungle',noItem,0);
var cave = new Location('Cave',noItem,0);
var cliffs = new Location('Cliffs',noItem,0);
var secretCave = new Location('SecretCave',noItem,0);
var waterfall = new Location('Waterfall',water,0);
var ocean = new Location('Ocean',FedExBox,0);
var trap = new Location('Trap',noItem,0);
var tree = new Location('Tree',noItem,0);
var shack = new Location('Shack',knife,0);
var bananaTree = new Location('BananaTree',banana,0)

// locations array 

var locations = [beach,jungle,cave,cliffs,secretCave,waterfall,ocean,trap,tree,shack,bananaTree];

// Player Object

var player = {
    currentLocation: locations[0],
    currentPoints: 0,
    inventory: ['Waterbottle'],
    breadcrumbTrail: ['Beach']
};

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
            
    case locations[0]:
            player.currentLocation = locations[1]; 
            if (locations[1].beenVisted === 0) {
                player.currentPoints += 5;
                locations[1].beenVisted = 1;
            } 
            setting(jungle());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[2]:
            setting('You walk for 20 minutes but come up to a dead end.' +
                    'There is no water around so you walk back to the entrance of the cave. ');
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[5]:
            player.currentLocation = locations[2]; // changed location to cave
            if (locations[2].beenVisted === 0) {
                player.currentPoints += 5;
                locations[2].beenVisted = 1;
            } 
            setting(cave());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[6]:
            player.currentLocation = locations[0]; // changed location to beach
            setting(beach());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[1]:
            player.currentLocation =  locations[7]; // changed location to trap
            setting(trap());
            yourPoints('Current Points: ' + player.currentPoints);  
            break;
    case locations[7]:
            player.currentLocation = 'dead'; // end of game for player
            player.currentPoints = 0;
            setting('You try to go north but you end up sinking further' +
                    ' into the quicksand.You are dead.');
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[3]:
            setting('You can see the whole island from here.' + 
                    'To the north you see a Jungle, maybe there will be water or food there.' +
                    'You go back to the entrance of Cliffs.\n');
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[4]:
            player.currentLocation = locations[3]; // changed location to cliffs
            setting(cliffs());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    
    }
    
}
        
function goEast() {
    switch (player.currentLocation){
            
    case locations[0]:
            player.currentLocation = locations[2]; //changed location to cave
            if (locations[2].beenVisted === 0) {
                player.currentPoints += 5;
                locations[2].beenVisted = 1;
            }
            setting(cave());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[7]:
            player.currentLocation = 'dead'; // end of game for player
            player.currentPoints = 0;
            setting('You reach for the vine but it turns out that its a Snake!' + 
                    'Still trapped by the quicksand, the snake attacks and you die.');
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[1]:
            player.currentLocation = locations[10];
            if (locations[10].beenVisted === 0) {
                player.currentPoints += 5;
                locations[10].beenVisted = 1;
            } 
            setting(bananaTree());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[3]:
            player.currentLocation = locations[0]; // changed location to Beach
            setting(beach());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[4]:
            player.currentLocation = locations[5]; // changed location to waterfall
            if (locations[5].beenVisted === 0) {
                player.currentPoints += 5;
                locations[5].beenVisted = 1;
            }
            setting('Walking for over an hour in the dark and wet cave you find a waterfall!' +                     waterfall());
            yourPoints('Current Points: ' + player.currentPoints);
                break;
    case locations[8]:
            player.currentLocation = locations[1];
            setting(jungle());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[9]:
            player.currentLocation = locations[1];
            setting(jungle());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
                   
    }
}
        
function goSouth() {
    switch (player.currentLocation){
    case locations[0]:
            player.currentLocation = locations[6]; //changed location to ocean
            if (locations[6].beenVisted === 0) {
                player.currentPoints += 5;
                locations[6].beenVisted = 1;
            } 
            setting(ocean());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[6]:
            player.currentLocation = 'dead'; // end of game for player
            player.currentPoints = 0;
            setting('You start to swim and get caught in a rip tide. You are dead. ');
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[2]:
            player.currentLocation = locations[5]; //changed location to waterfall
            if (locations[5].beenVisted === 0) {
                player.currentPoints += 5;
                locations[5].beenVisted = 1;
            } 
            setting(waterfall());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[1]:
            player.currentLocation = locations[0]; // changed loaction to Beach
            setting(beach());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[7]:
            player.currentLocation = 'dead'; // end of game for player
            player.currentPoints = 0;
            setting('You try to go south but you end up sinking further ' + 
                    'into the quicksand.You are dead.');
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[3]:
            player.currentLocation = locations[4]; // changed location to secret cave
            if (locations[4].beenVisted === 0) {
                player.currentPoints += 5;
                locations[4].beenVisted = 1;
            } 
            setting(secretCave());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[9]:
            player.currentLocation = locations[8];
            if (locations[8].beenVisted === 0) {
                player.currentPoints += 5;
                locations[8].beenVisted = 1;
            }
            setting('You fall down a steep hill so you cannot go back up north. ' + tree());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
}
    
}
        
function goWest() {
    switch (player.currentLocation){
    case locations[2]:
            player.currentLocation = locations[0]; // changed location to beach
            setting(beach(''));
            yourPoints('Current Points: ' + player.currentPoints); 
            break;
    case locations[6]:
            player.currentLocation = 'dead'; // end of game for player
            setting('You swim for 5 minutes before realizing a manatee ' + 
                    'is following you. You do not like manatees. You have a panic ' + 
                    'attack and drown. You are dead.');
            player.currentPoints = 0;
            yourPoints('Current Points: ' + player.currentPoints); 
            break;
    case locations[7]:
            player.currentLocation = locations[9]; // changed location to shack
            if (locations[9].beenVisted === 0) {
                player.currentPoints += 5;
                locations[9].beenVisted = 1;
            } 
            setting(shack());
            yourPoints('Current Points: ' + player.currentPoints); 
            break;
    case locations[1]:
            player.currentLocation = locations[8];
            if (locations[8].beenVisted === 0) {
                player.currentPoints += 5;
                locations[8].beenVisted = 1;
            } 
            setting(tree());
            yourPoints('Current Points: ' + player.currentPoints);    
            break;
    case locations[0]:
            player.currentLocation = locations[3]; // changed location to Cliffs
            if (locations[3].beenVisted === 0) {
                player.currentPoints += 5;
                locations[3].beenVisted = 1;
            } 
            setting(cliffs());
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[3]:
            player.currentLocation = 'dead'; // end of game for player
            player.currentPoints = 0;
            setting('You should have been more careful. You try to ' + 
                    'get a better look at the edge of the cliffs and you fall to your death.');
            yourPoints('Current Points: ' + player.currentPoints);
            break;
    case locations[10]:
            player.currentLocation = locations[1];
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
    case locations[9]:
            if (locations[9].beenVisted === 1) { 
                player.inventory.push(knife.object);
                extraInfo(knife.whatIsIt);
                locations[9].beenVisted = 2;
            } else {
                extraInfo('You have already taken the ' + knife.object);
            }
            break;
    case locations[10]:
            if (locations[10].beenVisted === 1) {
                player.inventory.push(banana.object);
                extraInfo(banana.whatIsIt);
                locations[10].beenVisted = 2;
            } else {
                extraInfo('You have already taken the ' + banana.object);
            }
            break;
    case locations[5]:
            if (locations[5].beenVisted === 1) {
                player.inventory.push(water.object);
                extraInfo(water.whatIsIt);
                locations[5].beenVisted = 2;
            } else {
                extraInfo('You have already taken the ' + water.object);
            }
            break;
    case locations[6]:
            if (locations[6].beenVisted === 1) {
                player.inventory.push(FedExBox.object);
                extraInfo(FedExBox.whatIsIt);
                locations[6].beenVisted = 2;
            } else {
                extraInfo('You have already taken the ' + FedExBox.object);
            }
            break;
    default:
            extraInfo(noItem.whatIsIt);
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
    case locations[9]:
            extraInfo('There is a knife here.');
            break;
    case locations[10]:
            extraInfo('There are bananas here.');
            break;
    case locations[5]:
            extraInfo('There is water here.');
            break;
    case locations[6]:
            extraInfo('There seems to be a FexEx Box Floating on the shore.')
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