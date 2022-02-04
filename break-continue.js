var i = 0;
while (i < 15) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}
for (var i = 0; i < 20; i++) {
    console.log(i);
    if (i == 8) {
        break;
    }
}
var numbers = [45, 67, 48, 82, 27]
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 80) {
        continue;
    }
    console.log(number);
}