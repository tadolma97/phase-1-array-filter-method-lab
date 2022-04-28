// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(star=>name.toLowerCase()===star.toLowerCase());
}

function fuzzyMatch(drivers,letter){
    return drivers.filter(driver=>driver.charAt(0).toLowerCase()===letter.charAt(0).toLowerCase());
}

function matchName(drivers, ming){
    return drivers.filter(driver=>driver.name===ming);
}