
var chosenColor = document.getElementById('RGBuser').value
console.log(chosenColor)

function hexToRgb(hex) {
var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
    } : null;
}

var hexR = hexToRgb(chosenColor).r
var hexB = hexToRgb(chosenColor).b 
var hexG = hexToRgb(chosenColor).g

console.log(hexR, hexB, hexG)
