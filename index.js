// Code your solution in this file!
const scuberSt = 42;
function distanceFromHqInBlocks(block) {
    return Math.abs(block - scuberSt);
}
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block)*264;
}
function distanceTravelledInFeet(start,dest) {
    return Math.abs(dest - start)*264;
}
function calculatesFarePrice(start, dest) {
    var dist = distanceTravelledInFeet(start,dest);
    if (dist <= 400) {
        return 0;
    }
    else if (dist <= 2000) {
        return (dist-400)*0.02;
    }
    else if (dist <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}