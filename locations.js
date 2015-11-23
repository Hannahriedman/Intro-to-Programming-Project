// Hannah Riedman 11-8-15 Project 4 120L-115




function beach(){
    var message = 'You are now back at the Beach.';
    enable('W'); // go to cliffs
    enable('S'); // go to ocean
    enable('E'); // go to cave
    enable('N'); // go to jungle
    player.breadcrumbTrail.push(player.currentLocation);
    return message;
}
function cave() {
    var message = 'You are now in a cave.There is a path to the North and to the South. ';
    enable('W'); // back to beach
    enable('S'); // go to waterfall
    disable('E');
    enable('N'); // message to dead end
    player.breadcrumbTrail.push(player.currentLocation);
    return message;
}
function cliffs() {
    var message = 'You are now at the rocky cliffs! Be careful!';
    enable('W'); // death
    enable('S'); // go to secretcave
    enable('E'); // back to beach
    enable('N'); // message 
    player.breadcrumbTrail.push(player.currentLocation);
    return message;
}
function secretCave() {
    var message = 'The cliffs drop off into the ocean to the south.' + 
'You decide to climb down the cliffs and you find an enterance to a cave.';
    disable('W');
    disable('S');
    enable('E'); // go to waterfall
    enable('N'); // back to cliffs
    player.breadcrumbTrail.push(player.currentLocation);
    return message;
}
function ocean() {
    var message = 'You are now facing the vast ocean. You do not ' + 
'have a boat  and it looks pretty dangerous.';
    enable('W'); // death
    enable('S'); // death
    disable('E');
    enable('N'); // back to beach
    player.breadcrumbTrail.push(player.currentLocation);
    return message;
}
function jungle() {
    var message ='You are now in the Jungle.';
    enable('W'); // go to tree
    enable('S'); // back to beach
    enable('E'); // go to bananatree
    enable('N'); // go to trap
    player.breadcrumbTrail.push(player.currentLocation);
    return message;
} 
function waterfall() {
    var message = 'You are at a Waterfall! Congrats! You have found fresh water! Take some water!';
    disable('W');
    disable('S');
    disable('E');
    enable('N'); // back to cave enterance
    player.breadcrumbTrail.push(player.currentLocation);
    return message;
}
function trap() {
    var message = 'You walk through the Jungle for an hour you decide ' +
'to take a break under a tree.\n After a few moments you notice you ' + 
'are sinking into the ground. There is a branch to the west and a vine to the East.';
    enable('W'); // escape trap
    enable('S'); // death
    enable('E'); // death
    enable('N'); // death
    player.breadcrumbTrail.push(player.currentLocation);
    return message;
}
function tree() {
    var message = 'After a 5 minute walk you come upon a large tree. ' + 
                  'You climb ontop of it and see what looks like a waterfall in the distance. ' + 
                  'it appears to be to the east of the beach.\n';
    disable('W');
    disable('S');
    enable('E'); // back to jungle entrance
    disable('N'); 
    player.breadcrumbTrail.push(player.currentLocation);
    return message;
    
}
function shack() {
    var message = 'You grab onto the branch and pull yourself ' + 
                  'out of the quicksand. You walk further into the jungle before ' +
                  'discovering a shack. It looks very creepy.There is an old knife there.';
    disable('W');
    enable('S'); // go to tree
    enable('E'); // go back to jungle entrance 
    disable('N');
    player.breadcrumbTrail.push(player.currentLocation);
    return message;
}
function bananaTree() {
    var message = 'Yay! You have found some bananas!  Take some, you might be hungry later!';
    enable('W'); // back to jungle entracne 
    disable('S');
    disable('E');
    disable('N');
    player.breadcrumbTrail.push(player.currentLocation);
    return message;
}