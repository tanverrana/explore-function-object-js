function bringSingara(taka) {
    console.log("Singrar Jonno dice", taka);
    console.log("Mama Singara den");
    var singaraPrice = 10;
    var singaraQiantity = taka / singaraPrice;
    return singaraQiantity;
}
var money = 150;
var singara = bringSingara(money);
console.log("Ai nen apnar singara", singara);