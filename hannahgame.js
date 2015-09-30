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
    }  else if (currentLocation === 'Jungle') {
        currentLocation = 'Trap';
        setting('You walk through the Jungle for an hour you decide to take a break under a tree.\n After a few moments you notice you are sinking into the ground. There is a branch to the west and a vine to the East.');
        yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Trap') {
        currentLocation = 'dead';
        currentPoints = 0;
        setting('You try to go north but you end up sinking further into the quicksand.You are dead.');
        yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Cliffs') {
        setting('You can see the whole island from here. To the north you see a Jungle, maybe there will be water or food there.\n');
        yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'SecretCave') {
        currentLocation = 'Cliffs';
        setting('After a strenious climb, you make it back up the cliffs.');
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
    } else if (currentLocation === 'Trap') {
        currentLocation = 'dead';
        currentPoints = 0;
        setting('You reach for the vine but it turns out that its a Snake! Still trapped by the quicksand, the snake attacks and you die.');
        yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Jungle') {
        setting('Yay! You have found some bananas! They are very yummy.');
        yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Cliffs') {
        currentLocation = 'Beach';
        setting('You are now back at the Beach.');
        yourPoints('Current Points: ' + currentPoints);
    } else if(currentLocation === 'SecretCave') {
        currentLocation = 'Waterfall';
        currentPoints += 5;
        setting('Walking for over an hour in the dark and wet cave you find a waterfall! Congrats you have found water! Once you reach the waterfall, the path you took caves in.');
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
    } else if (currentLocation === 'Jungle') {
        currentLocation = 'Beach';
        setting('You are now back at the Beach. ');
        yourPoints('Current Points: ' + currentPoints); 
    } else if (currentLocation === 'Trap') {
        currentLocation = 'dead';
        currentPoints = 0;
        setting('You try to go south but you end up sinking further into the quicksand.You are dead.');
        yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Cliffs') {
        setting('The cliffs drop off into the ocean to the south. You decide to climb down the cliffs and you find an enterance to a cave.');
        currentLocation = 'SecretCave';
        currentPoints += 5;
        yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'SecretCave') {
        setting('There is a cave wall you cannot go that way.');
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
        currentLocation = 'dead';
        setting('You swim for 5 minutes before realizing a manatee is following you. You do not like manatees. You have a panic attack and drown. You are dead.');
        currentPoints = 0;
        yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Trap') {
        currentLocation = 'Jungle';
        setting('You grab onto the branch and pull yourself out of the quicksand. You walk back south to the jungle enterence.');
        yourPoints('Current Points: ' + currentPoints); 
    } else if (currentLocation === 'Jungle') {
        setting('After a 5 minute walk you come upon a large tree. You climb ontop of it and see what looks like a waterfall in the distance. it appears to be to the east but you can not acess it from here. You walk back to the jungle entrance. \n');
        yourPoints('Current Points: ' + currentPoints); 
    } else if (currentLocation === 'Beach') {
        currentLocation = 'Cliffs';
        currentPoints += 5;
        setting('You are now at the rocky cliffs! Be careful!');
        yourPoints('Current Points: ' + currentPoints); 
    } else if (currentLocation === 'SecretCave') {
        setting('There is a cave wall you cannot go that way.');
        yourPoints('Current Points: ' + currentPoints);
    } else if (currentLocation === 'Cliffs') {
        currentLocation = 'dead';
        currentPoints = 0;
        setting('You should have been more careful. You try to get a better look at the edge of the cliffs and you fall to your death.');
        yourPoints('Current Points: ' + currentPoints);
    }
}