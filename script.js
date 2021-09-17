
function startup() { //fires on startup to grab elements
    var colorPicker = document.getElementById('RGBuser');
    var chosenColorHex = colorPicker.value;
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
    console.log(chosenColorHex);
    
}

function updateFirst(event) { //called when user drags around cursor in color picker
    chosenColorHex = event.target.value;
    console.log(chosenColorHex);
}

function updateAll(event) { //called when window is closed
    chosenColorHex = event.target.value;
    RGBtoMaxwellHueConverter(chosenColorHex);
}

function hexToRgb(hex) {
var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
    } : null;
}

function RGBtoMaxwellHueConverter(chosenColorHex) {

    hexR = hexToRgb(chosenColorHex).r;
    hexG = hexToRgb(chosenColorHex).g;
    hexB = hexToRgb(chosenColorHex).b;
    console.log(hexR, hexG, hexB);
    var rho = (1/(hexR + hexG + hexB)) * hexR;
    var gamma = (1/(hexR + hexG + hexB)) * hexG;
    var beta = (1/(hexR + hexG + hexB)) * hexB;
    
    var lumes = Math.max(hexR, hexG, hexB) / 255;

    console.log(lumes)
    console.log(rho, gamma, beta);




}

startup();



