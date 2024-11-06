// FUNCTION TO GENERATE COLOR
function randomColorUtility(length){
	return Math.floor(Math.random() * length)
}


function handleCreateRandomHexColor() {
    // #678765
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    return hexColor;
}


// console.log(randomColorUtility(100))
console.log(handleCreateRandomHexColor())