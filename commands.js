// Hannah Riedman 12-9-15 Final Project 120L-115

// Functions that go with text commands or buttons

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
    case 'I am a failure':
        restart();
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
    case noItem:
            extraInfo('There is no item to take here.');
            break;
    default:
            player.currentLocation.items = noItem;
            player.inventory.push(itemHere.object);
            extraInfo(itemHere.whatIsIt);
            break;
    }
    inventory();  
    
}

function help() {
    var north = isEnabled('N');
    var east = isEnabled('E');
    var south = isEnabled('S');
    var west = isEnabled('W');
    extraInfo('Vaild text commands: Help,Take,Look,Use,'+north+','+east+','+south+','+west);
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
    if (player.inventory.indexOf(input) ==! null) {
            
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