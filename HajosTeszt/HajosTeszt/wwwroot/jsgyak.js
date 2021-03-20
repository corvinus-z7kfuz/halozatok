var fakt = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

window.onload = function printPascal() {
    console.log("betöltődött")
    document.getElementById("pascal").innerHTML = "";
    var arr = generatePascal(10);
    for (var sor = 0; sor < 10; sor++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("sor");
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var newElem = document.createElement("div");
            newElem.classList.add("elem");
            newElem.innerHTML = arr[sor][oszlop];
            newDiv.appendChild(newElem);
        }
        document.getElementById("pascal").appendChild(newDiv);

    }
}

function generatePascal(n) {
    var arr = [];
    var temp;
    for (var sor = 0; sor < n; sor++) {
        arr[sor] = [];
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            if (oszlop == sor) {
                arr[sor].push(1);
            } else {
                tmp = (!!arr[sor - 1][oszlop - 1] ? arr[sor - 1][oszlop - 1] : 0) + (!!arr[sor - 1][oszlop] ? arr[sor - 1][oszlop] : 0);
                arr[sor].push(tmp);
            }
        }
    }
    return arr;
}