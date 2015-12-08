// Hannah Riedman 10-17-15 Project 3 120L-115
var Equipped = '';
const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;
// Prototypes 
function Location(name, item, tracker, descrip, btn) {
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

var map = [
     // NORTH, EAST, SOUTH, WEST 
     [ locations[1], locations[2], locations[6], locations[3] ], // from Beach: Jungle,Cave,Ocean,Cliffs
     [ locations[7], locations[10], locations[0], locations[8] ], // from Jungle: Trap,BananaTree,Beach,Tree
     [ null, null, locations[5], locations[0] ], // from Cave: --Waterfall,Beach
     [ null, locations[0], locations[4], null ], // from Cliffs: -Beach,SecretCave-
     [ locations[3], locations[5], null, null ], // from SecretCave: Cliffs,Waterfall--
     [ locations[2], null, null, null ], // from Waterfall: Cave---
     [ locations[0], null, null, null ], // from Ocean: Beach---
     [ null, null, null, locations[9] ], // from Trap: ---Shack
     [ null, locations[1], null, null ], // from Tree: -Jungle--
     [ null, locations[1], locations[8], null ], // from Shack: -Jungle,Tree-
     [ null, null, null, locations[1] ] // from BananaTree: ---Jungle
    
];


// Display text functions
function showScene(site) {
    setting(site.whatIsHere);
    buttons(site);
    //document.getElementById("scene").style.backgroundImage = "url('"+site.image+"')";
    yourPoints('Current Points: ' + player.currentPoints);
    player.breadcrumbTrail.push(player.currentLocation.place);
    previous();
    
}
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
function from(loc,dir) {
    var locId = locations.indexOf(loc);
    //buttons(locId);
    return map[locId][dir]; 
}

function buttons(loc) {
    locId = map[locations.indexOf(loc)];
   if  (locId[NORTH] !== null) {
       enable('N');
   } else {
       disable('N');
   } if (locId[EAST]) {
       enable('E');
   } else {
       disable('E');
   } if (locId[SOUTH]) {
       enable('S');
   } else {
       disable('S');
   } if (locId[WEST]) {
       enable('W');
   } else {
       disable('W');
   } 
}

function move(dir) {
    var nextLocation = from(player.currentLocation,dir); /* TODO Use the function above to get the destination. */
    if (nextLocation !== null) {
        player.currentLocation = nextLocation;
        points();
        showScene(player.currentLocation);
    } else {
        setting("You cannont go that way");
    }
}

function points() {
    var place = player.currentLocation;
    if (place.beenVisted === 0) {
            player.currentPoints += 5;
            place.beenVisted = 1;
    } 
}

function input() {
    var userInput = document.getElementById('command').value;
    switch (userInput) {
            
    case 'N':
    case 'n':
        move(NORTH);
        break;
    case 'E':
    case 'e':
        move(EAST);
        break;
    case 'S':
    case 's':
        move(SOUTH);
        break;
    case 'W':
    case 'w':
        move(WEST);
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