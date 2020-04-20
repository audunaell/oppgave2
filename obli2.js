// controller

function selected(barNo) {
    if (nameOfSelectedBar == barNo) {
        nameOfSelectedBar = null;
    } else if (nameOfSelectedBar == null) {
        nameOfSelectedBar = barNo;
    }
    show();
}

function removeBar() {
    let index = nameOfSelectedBar - 1;
    numbers.splice(index, 1);
    nameOfSelectedBar = null;
    show();
}

function addBar() {    
    let testValue = testInput(newValue);

    if (testValue == true) {
        numbers.push(newValue);
        show();
    }
}

function changeBarValue() {
    let index = nameOfSelectedBar - 1;    
    let testValue = testInput(newValue);

    if (testValue == true) {
        numbers[index] = newValue;
        show();
    }
}

function testInput(inpValue) {
    if (inpValue >= 1 && inpValue <= 10 && isNaN(inpValue) == false) {
        return true;
    }
    alert("Has to be a number from 1-10");
    return false;
}