// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return Math.abs(distance-42);
}

function distanceFromHqInFeet(distance2){
    let blockDist= Math.abs(distance2-42);
    return blockDist*264;
}

function distanceTravelledInFeet(pointA,pointB){
    let distTrav= Math.abs(pointA-pointB);
    return distTrav*264;
}

function calculatesFarePrice(start, destination){
    let distTrav2= Math.abs(start-destination)*264;
    if(distTrav2<=400){ 
        return 0
    }else if(distTrav2>400 && distTrav2<=2000){
        return (distTrav2-400)*0.02;
    }else if(distTrav2>2000 && distTrav2<2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}
