var kerdesek;



window.onload = function letoltes() {
    fetch('/questions.json')
        .then(r => r.json())
        .then(d => letoltesBefejezodott(d));

    function letoltesBefejezodott(adat) {
        let kerdesSzoveg = document.getElementById("kérdés_szöveg");
        console.log("Sikeres letöltés");
        kerdesek = adat;
        console.log(`${adat.length} kérdés érkezett`)

        function kerdesMegjelenites(i) {
            console.log(kerdesek[i].questionText);
            document.getElementById("kérdés_szöveg").innerHTML = adat[i].questionText;
            document.getElementById("válasz1").innerHTML = adat[i].answer1;
            document.getElementById("válasz2").innerHTML = adat[i].answer2;
            document.getElementById("válasz3").innerHTML = adat[i].answer3;
        }

        window.onload = kerdesMegjelenites(0);

        prev = function (i) {
            kerdesMegjelenites(2);
        }
        next = function (i) {
            kerdesMegjelenites(1);
        }

        document.getElementById("vissza").onclick = prev;
        document.getElementById("elore").onclick = next;
    }
}