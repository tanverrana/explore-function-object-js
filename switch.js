var color = "yellow";
if (color == "blue") {
    console.log("color is blue");
}
else if (color == "red") {
    console.log("Color is red");
}
else if (color == "green") {
    console.log("Color is green");
}
else if (color == "yellow") {
    console.log("Color is yellow");
}
else if (color == "white") {
    console.log("Color is white");
}
else if (color == "black") {
    console.log("Color is blck");
}
else {
    console.log("Color No Match")
}

switch (color) {
    case "blue":
        console.log("Color is blue");
        break;
    case "red":
        console.log("color is red");
        break;
    case "green":
        console.log("color is green");
        break;
    case "white":
        console.log("color is white");
        break;
    case "yellow":
        console.log("color is yellow");
        break;
    default:
        console.log("Color no Match");

}