// Hannah Riedman 11-8-15 Project 4 120L-115

// navagation for the game: this function displays, and add points for the current location.
function move(dir) {
    var nextLocation = from(player.currentLocation,dir);
    if (typeof nextLocation === 'object'){
       if (nextLocation !== null) {
            death(nextLocation,dir); // function will decide if at this location will lead to death
            player.currentLocation = nextLocation;
            points();
            player.breadcrumbTrail.push(player.currentLocation.place);
            showScene(player.currentLocation);
        } else {
            setting("You cannont go that way");
        } 
    } else {
        setting(nextLocation);
    }
    
}
