const COORDS = 'coords';


function handleGeoSuccess(position) {
    console.log(position);
}
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess)
}

function loadCords() {
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null) {
        askForCoords();
    } else {

    }
}

function init() {
    loadCords();
}

init();