// Code your solution in this file!
function distanceFromHqInBlocks(blockDist) {
    if (blockDist > 42) {
        return blockDist - 42
    } else if (blockDist < 42) {
        return 42 - blockDist
    }
}

function distanceFromHqInFeet(feetDist) {
    distanceFromHqInBlocks(feetDist);
    if (feetDist > 42) {
        return (feetDist - 42) * 264
    } else if (feetDist < 42) {
        return (42 - feetDist) * 264
    }
}

function distanceTravelledInFeet(travelDis1, travelDis2) {
    if (travelDis2 > travelDis1) {
        return (travelDis2 - travelDis1) * 264
    } else if (travelDis2 < travelDis1) {
        return (travelDis1 - travelDis2) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(destination, start);
    
    if (distance < 400) {
        return 0;
    }   else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance <2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
        
}
