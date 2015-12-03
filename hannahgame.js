// Hannah Riedman 10-17-15 Project 3 120L-115
var Equipped = '';
// Prototypes 
function Location(name, item, tracker, descrip) {
    this.place = name;
    this.items = item;
    this.beenVisted = tracker;
    this.whatIsHere = descrip;
};
function Item(name, descrip) {
    this.object = name;
    this.whatIsIt = descrip;
};

// new objects from prototypes

// item objects
var waterbottle = new Item('Waterbottle','You have taken a waterbottle.')
var knife = new Item('Knife', 'You have taken a Knife.');
var banana = new Item('Banana', 'You have taken a banana.');
var water = new Item('Water', 'You have taken water.');
var FedExBox = new Item('FedEx Box', 'You have taken the FedEx Box.');
var noItem = new Item('No item', 'There is no item here');

// loctaion objects
var beach1 = new Location('Beach',noItem,1,'You are now back at the Beach.');

var jungle1 = new Location('Jungle',noItem,0,'You are now in the Jungle.');
                           
var cave1 = new Location('Cave',noItem,0,'You are now in a cave.' + 
                         ' There is a path to the North and to the South.');

var cliffs1 = new Location('Cliffs',noItem,0,'You are now at the rocky cliffs!' + 
                           ' Be careful!');

var secretCave1 = new Location('SecretCave',waterbottle,0,'The cliffs drop off into the' + 
                               ' ocean to the south. You decide to climb down the cliffs' +
                               ' and you find an enterance to a cave.');

var waterfall1 = new Location('Waterfall',water,0,'You are at a Waterfall! Congrats!' + 
                              ' You have found fresh water!');

var ocean1 = new Location('Ocean',FedExBox,0,'You are now facing the vast ocean.' + 
                          ' You do not have a boat  and it looks pretty dangerous.');

var trap1 = new Location('Trap',noItem,0,'You walk through the Jungle for an hour' +  
                         'you decide to take a break under a tree.\n After a few' + 
                         'moments you notice you are sinking into the ground.' + 
                         'There is a branch to the west and a vine to the East.');

var tree1 = new Location('Tree',noItem,0,'After a 5 minute walk you come upon a' + 
                         ' large tree. You climb ontop of it and see what looks' + 
                         ' like a waterfall in the distance. it appears to be' + 
                         ' to the east of the beach.\n');

var shack1 = new Location('Shack',knife,0,'You grab onto the branch and pull' + 
                          ' yourself out of the quicksand. You walk further into' + 
                          ' the jungle before discovering a shack. It looks very creepy.');

var bananaTree1 = new Location('BananaTree',banana,0,'You have found Banana Trees,' +
                               ' there might be monkeys around. ');

// locations array 
var locations = [beach1,jungle1,cave1,cliffs1,secretCave1,waterfall1,ocean1,trap1,tree1,shack1,bananaTree1];

// Player Object
var player = {
    currentLocation: locations[0],
    currentPoints: 0,
    inventory: [],
    breadcrumbTrail: ['Beach']
};

// Display text functions
function setting(descrip) {
    document.getElementById('scene').innerHTML = descrip;
} 
function yourPoints(descrip) {
    document.getElementById('points').innerHTML = descrip;   
} 
function extraInfo(descrip) {
    document.getElementById('info').innerHTML = descrip;
}
// functions for buttons and commands
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
                    ' There is no water around so you walk back to the entrance of the cave. ');
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
                    ' To the north you see a Jungle, maybe there will be water or food there.' +
                    ' You go back to the entrance of Cliffs.\n');
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
                    ' Still trapped by the quicksand, the snake attacks and you die.');
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
                    ' into the quicksand. You are dead.');
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
            setting(beach());
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
    case 'Take':
    case 'take':
        take();
        break;
    case 'Help':
    case 'help':
        help();
        break;
    case 'Look':
    case 'look':
        lookAround();
        break;
    case 'Use':
    case 'use':
        useItem();
        break;
    default:
        setting('Invaild command, try again!');
    }
}

function take() {
    var itemHere = player.currentLocation.items;
    switch (itemHere){
    case water:
            if (Equipped === 'Waterbottle') {
                player.currentLocation.items = noItem;
                player.inventory.push(itemHere.object);
                extraInfo(itemHere.whatIsIt);
            } else {
                extraInfo('You can not take the water unless you use the waterbottle.')
            }
            break;
    default:
            player.currentLocation.items = noItem;
            player.inventory.push(itemHere.object);
            extraInfo(itemHere.whatIsIt);
            break;
    }
    inventory();  
    
}

function inventory() {
    document.getElementById('inventory').innerHTML = ('Currently you have: ' + player.inventory);
}

function help() {
    var north = isEnabled('N');
    var east = isEnabled('E');
    var south = isEnabled('S');
    var west = isEnabled('W');
    extraInfo('Vaild text commands: Help,Take,Look,Use,'+north+','+east+','+south+','+west);
}

function previous() {
    var previousM = player.breadcrumbTrail;
    document.getElementById('previous').innerHTML = ('History: ' + previousM.slice(previousM.length-5,previousM.length));
}

function lookAround() {
    var itemHere = player.currentLocation.items;
        switch (itemHere) {
            
        case noItem:
            extraInfo('There is no item here.');
            break;
        default:
            extraInfo('There is a ' + itemHere.object + ' here.');
        }
    
}

function useItem() {
    var input = prompt('What item would you like to use?');
    if (player.inventory.indexOf(input ==! -1)) {
            switch (input) {
            case 'waterbottle':
            case 'Waterbottle':
                extraInfo('You now have the waterbottle equipped.');
                Equipped = 'Waterbottle';
                break;
            default:
                extraInfo('You can not use that item');
            }
    } else {
            extraInfo('You do not have the ' + input + 'with you.')
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