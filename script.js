
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

    redValue = hexToRgb(chosenColorHex).r;
    greenValue = hexToRgb(chosenColorHex).g;
    blueValue = hexToRgb(chosenColorHex).b;
    console.log(redValue, greenValue, blueValue);

        var rho = (1/(redValue + greenValue + blueValue)) * redValue;
        var gamma = (1/(redValue + greenValue + blueValue)) * greenValue;
        var beta = (1/(redValue + greenValue + blueValue)) * blueValue;
        
        var lumes = Math.max(redValue, greenValue, blueValue) / 255;
    
        console.log(lumes);
        console.log(rho, gamma, beta);
    
        var roundedRho = rho.toFixed(3);
        var roundedGamma = gamma.toFixed(3);
        var roundedBeta = beta.toFixed(3);
        var roundedLumes = lumes.toFixed(3);
    
        var rhoGammaBetaArray = [roundedRho, roundedGamma, roundedBeta, roundedLumes];

        if (isNaN(rho) || isNaN(gamma) || isNaN(beta)) {
            var blackRhoGammaBeta = [0,0,0,0];
            document.getElementById('resultText').innerHTML = "The color you picked, represented in Barycentric Maxwell Hues (ρ,ɣ,β, L) is: (" + blackRhoGammaBeta + ")";
        } else {document.getElementById('resultText').innerHTML = "The color you picked, represented in Barycentric Maxwell Hues (ρ,ɣ,β, L) is:  (" + rhoGammaBetaArray + ")";}
        


}

startup();



