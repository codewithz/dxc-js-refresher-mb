const colors = ['red', 'green', 'blue'];

function listColors(color) {
    // return "<li>" + color + "</li>";
    return `<li>${color}</li>`;
}

const mappedArray = colors.map(listColors);
console.log(mappedArray)

///--------- String Interpolation Discussion----------

let text = "I can't be there by 4:30";
let text2 = `I can't be there by 4:30`;