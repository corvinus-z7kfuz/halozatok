var kérdések;

window.onload = function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data));

    function letöltésBefejeződött(d) {
        console.log("Sikeres letöltés")
        console.log(d)
        kérdések = d;
    }
}

function kérdésMegjelenítés(kérdés) {
    for (var i = 0; i < kérdés.length; i++) {
        document.getElementById("kérdés_szöveg").innerHTML = kérdés[i].questionText;
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/";
    }
}