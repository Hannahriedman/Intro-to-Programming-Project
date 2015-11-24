// Hannah Riedman 11-8-15 Project 4 120L-115

function beach(){
    var message = beach1.whatIsHere.toString(); //'You are now back at the Beach.';
    enable('W'); // go to cliffs
    enable('S'); // go to ocean
    enable('E'); // go to cave
    enable('N'); // go to jungle
    player.breadcrumbTrail.push(player.currentLocation.place);
    return message;
}
function cave() {
    var message = cave1.whatIsHere.toString();
    enable('W'); // back to beach
    enable('S'); // go to waterfall
    disable('E');
    enable('N'); // message to dead end
    player.breadcrumbTrail.push(player.currentLocation.place);
    console.log(player.currentLocation.place);
    console.log(player.breadcrumbTrail);
    return message;
}
function cliffs() {
    var message = cliffs1.whatIsHere.toString();
    enable('W'); // death
    enable('S'); // go to secretcave
    enable('E'); // back to beach
    enable('N'); // message 
    player.breadcrumbTrail.push(player.currentLocation.place);
    return message;
}
function secretCave() {
    var message = secretCave1.whatIsHere.toString();
    disable('W');
    disable('S');
    enable('E'); // go to waterfall
    enable('N'); // back to cliffs
    player.breadcrumbTrail.push(player.currentLocation.place);
    return message;
}
function ocean() {
    var message = ocean1.whatIsHere.toString();
    enable('W'); // death
    enable('S'); // death
    disable('E');
    enable('N'); // back to beach
    player.breadcrumbTrail.push(player.currentLocation.place);
    return message;
}
function jungle() {
    var message = jungle1.whatIsHere.toString();
    enable('W'); // go to tree
    enable('S'); // back to beach
    enable('E'); // go to bananatree
    enable('N'); // go to trap
    player.breadcrumbTrail.push(player.currentLocation.place);
    return message;
} 
function waterfall() {
    var message = waterfall1.whatIsHere.toString();
    disable('W');
    disable('S');
    disable('E');
    enable('N'); // back to cave enterance
    player.breadcrumbTrail.push(player.currentLocation.place);
    return message;
}
function trap() {
    var message = trap1.whatIsHere.toString();
    enable('W'); // escape trap
    enable('S'); // death
    enable('E'); // death
    enable('N'); // death
    player.breadcrumbTrail.push(player.currentLocation.place);
    return message;
}
function tree() {
    var message = tree1.whatIsHere.toString();
    disable('W');
    disable('S');
    enable('E'); // back to jungle entrance
    disable('N'); 
    player.breadcrumbTrail.push(player.currentLocation.place);
    return message;
    
}
function shack() {
    var message = shack1.whatIsHere.toString();
    disable('W');
    enable('S'); // go to tree
    enable('E'); // go back to jungle entrance 
    disable('N');
    player.breadcrumbTrail.push(player.currentLocation.place);
    return message;
}
function bananaTree() {
    var message = bananaTree1.whatIsHere.toString();
    enable('W'); // back to jungle entracne 
    disable('S');
    disable('E');
    disable('N');
    player.breadcrumbTrail.push(player.currentLocation.place);
    return message;
}