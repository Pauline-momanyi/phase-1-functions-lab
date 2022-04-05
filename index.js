// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return Math.abs(distance-42);
}

function distanceFromHqInFeet(distance2){
    // let blockDist= distanceFromHqInBlocks(distance2)
    //return blockDist*264
    return distanceFromHqInBlocks(distance2)*264;
}

function distanceTravelledInFeet(pointA,pointB){
    let distTrav= Math.abs(pointA-pointB);
    return distTrav*264;
}

function calculatesFarePrice(start, destination){
    let distTrav2= distanceTravelledInFeet(start,destination);
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
