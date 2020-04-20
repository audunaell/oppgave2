// JavaScript source code
function showSelectedBar(barName, barNumber) {
    let nameOfSelect = null;
    if (barName == barNumber) {
        return (nameOfSelect = null);
    } else if (barName == null) {
        return (nameOfSelect = barNumber);
    }
    return barName;
}
function addNewBar(newBar, barList) {    
    let testValue = testInput(newBar);
    if (testValue == true) {
        barList.push(newBar);        
    }
    return barList;
}
function removeSelectedBar(barName, barList) {
    let index = barName - 1;
    barList.splice(index, 1);
    return barList;
}
function changeSelectedBar(barName, barList, newBarValue) {
    let index = barName - 1;    
    let testValue = testInput(newBarValue);

    if (testValue == true) {
        barList[index] = newBarValue;        
    }
    return barList;
}
function testInput(inpValue) {
    if (inpValue >= 1 && inpValue <= 10 && isNaN(inpValue) == false) {
        return true;
    }
    alert("Has to be a number from 1-10");
    return false;
    
}