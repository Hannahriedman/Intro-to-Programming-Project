// Hannah Riedman 10-17-15 Project 3 120L-115
var Equipped = '';
const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;

// Prototypes 

function Location(name, item, tracker, descrip, alive) {
    this.place = name;
    this.items = item;
    this.beenVisted = tracker;
    this.whatIsHere = descrip;
    this.endOfGame = alive;
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
var beach1 = new Location('Beach',noItem,1,'You are now back at the Beach.',0);

var jungle1 = new Location('Jungle',noItem,0,'You are now in the Jungle.',0);
                           
var cave1 = new Location('Cave',noItem,0,'You are now in a cave.' + 
                         ' There is a path to the North and to the South.',0);

var cliffs1 = new Location('Cliffs',noItem,0,'You are now at the rocky cliffs!' + 
                           ' Be careful!',0);

var secretCave1 = new Location('SecretCave',waterbottle,0,'The cliffs drop off into the' + 
                               ' ocean to the south. You decide to climb down the cliffs' +
                               ' and you find an enterance to a cave.',0);

var waterfall1 = new Location('Waterfall',water,0,'You are at a Waterfall! Congrats!' + 
                              ' You have found fresh water!',0);

var ocean1 = new Location('Ocean',FedExBox,0,'You are now facing the vast ocean.' + 
                          ' You do not have a boat  and it looks pretty dangerous.',0);

var trap1 = new Location('Trap',noItem,0,'You walk through the Jungle for an hour' +  
                         'you decide to take a break under a tree.\n After a few' + 
                         'moments you notice you are sinking into the ground.' + 
                         'There is a branch to the west and a vine to the East.',0);

var tree1 = new Location('Tree',noItem,0,'After a 5 minute walk you come upon a' + 
                         ' large tree. You climb ontop of it and see what looks' + 
                         ' like a waterfall in the distance. it appears to be' + 
                         ' to the east of the beach.\n',0);

var shack1 = new Location('Shack',knife,0,'You grab onto the branch and pull' + 
                          ' yourself out of the quicksand. You walk further into' + 
                          ' the jungle before discovering a shack. It looks very creepy.',0);

var bananaTree1 = new Location('BananaTree',banana,0,'You have found Banana Trees,' +
                               ' there might be monkeys around. ',0);
var dead = new Location('Death',noItem,1,'You are dead.',1);

// Extra Messages that are not locations

var messageC = 'You walk for 20 minutes but come up to a dead end.' +
              ' There is no water around so you walk back to the entrance of the cave. ';
var messageCl = 'You can see the whole island from here.' + 
                    ' To the north you see a Jungle, maybe there will be water or food there.' +
                    ' You go back to the entrance of Cliffs.\n';

// locations array 
var locations = [beach1,jungle1,cave1,cliffs1,secretCave1,waterfall1,ocean1,trap1,tree1,shack1,bananaTree1,dead];

// Player Object
var player = {
    currentLocation: locations[0],
    currentPoints: 0,
    inventory: [],
    breadcrumbTrail: ['Beach']
};

// MATRIX
var map = [
     // NORTH, EAST, SOUTH, WEST 
     [ locations[1], locations[2], locations[6], locations[3] ], // from Beach: Jungle,Cave,Ocean,Cliffs
     [ locations[7], locations[10], locations[0], locations[8] ], // from Jungle: Trap,BananaTree,Beach,Tree
     [ messageC, null, locations[5], locations[0] ], // from Cave: --Waterfall,Beach
     [ messageCl, locations[0], locations[4], null ], // from Cliffs: -Beach,SecretCave-
     [ locations[3], locations[5], null, null ], // from SecretCave: Cliffs,Waterfall--
     [ locations[2], null, null, null ], // from Waterfall: Cave---
     [ locations[0], dead, dead, null ], // from Ocean: Beach---
     [ dead, dead, dead, locations[9] ], // from Trap: ---Shack
     [ null, locations[1], null, null ], // from Tree: -Jungle--
     [ null, locations[1], locations[8], null ], // from Shack: -Jungle,Tree-
     [ null, null, null, locations[1] ], // from BananaTree: ---Jungle
     [ locations[1], locations[2], locations[6], locations[3]]// from death: back to beach 
];


// Display text functions
function showScene(site) {
    setting(site.whatIsHere);
    buttons(site);
    //document.getElementById("scene").style.backgroundImage = "url('"+site.image+"')";
    yourPoints('Current Points: ' + player.currentPoints);
    inventory();
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

function previous() {
    var previousM = player.breadcrumbTrail;
    document.getElementById('previous').innerHTML = ('History: ' + previousM.slice(previousM.length-5,previousM.length));
}
function inventory() {
    document.getElementById('inventory').innerHTML = ('Currently you have: ' + player.inventory);
}

// functions for navagation and points
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

function points() {
    var place = player.currentLocation;
    if (place.beenVisted === 0) {
            player.currentPoints += 5;
            place.beenVisted = 1;
    } 
}

function death(nxtlocation, dir) {
    var nextlocation = nxtlocation;
    var deadtxt = 'You are dead and restart on the Beach.';
    if (nextlocation.endOfGame === 1) {   
        switch(player.breadcrumbTrail.pop()) {
        case 'Ocean':
            if (dir === EAST) {
                locations[11].whatIsHere = 'You start to swim and get caught in a rip tide.' +
                deadtxt;
            } else {
                locations[11].whatIsHere = 'You start to swim and get caught in a rip tide.' +
                deadtxt;
                } 
            break;
        case 'Trap':
            if (dir === EAST) {
                locations[11].whatIsHere = 'You reach for the vine but it turns out that its a Snake!' + 
                ' Still trapped by the quicksand, the snake attacks and you die.' + deadtxt;
            } else {
                locations[11].whatIsHere = 'You try to go that way but you end up sinking further ' + 
                ' into the quicksand.' + deadtxt;
            }
            break;
        case 'Cliffs':
            locations[11].whatIsHere = 'You should have been more careful. You try to ' + 
            'get a better look at the edge of the cliffs and you fall to your death.' + deadtxt;
            break;
        }
        restart()
    } 
}

/** Problem in this function with not a complete restart because need to restart items and tracker variable**/
function restart() {
        player.currentPoints = 0;
        player.currentLocation = locations[0];
        player.inventory = [];
        player.breadcrumbTrail = ['Beach'];
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