document.addEventListener("DOMContentLoaded", event => {
    // denne kode gør at mit script er blevet indlæst på siden
    console.log("Side indlæst");
    document.querySelector('button').addEventListener('click', () =>{
        console.log('knap trykket');
    });
    // denne kode gør at når man trykker på button så vil den logge "knap trykket"
    // den lytter på alle button i htmlen. Der skal være # for en id og . for en class.
    function test() {
// her bliver der lavet en funktion der hedder test uden nogen parametre
        console.log("funktion kørt");
// funktionens indhold er en console.log der vil blive vist når funktionen kaldes
    }
    test();
// her bliver funktionen kaldt


//    function udskriv(navn, alder) {
// her bliver der lavet en funktion der hedder udskriv og der er to parametre i som er navn og alder
        var navn = "Martin";
        var alder = "23";
// her har jeg lavet 2 variabler som jeg bruger som parametre i denne funktion
        console.log("Jeg hedder", navn, "og jeg er", alder, "år gammel.")
// her er funktionens indhold
//    }
//    udskriv();
// her bliver funktionen kaldt

//     function udskriv(navn, alder) {
// // her bliver der lavet en funktion der hedder udskriv og der er to parametre i  som er navn og alder
//         console.log("Jeg hedder", navn, "og jeg er", alder, "år gammel.");
// // her er der lavet en console.log som skal bruge de parametre der er lavet til funktionen
// // her er funktionens indhold
//     }
//     document.querySelector('#oluf').addEventListener('click', () =>{
// // her bliver der lavet en eventlistener der gør at når man klikker på id'et oluf så vil der ske et event
//         udskriv("Oluf", "70");
// // her bliver funktionen udskriv kaldt og der bliver brugt værdierne oluf og 70 i den
//         });
//         document.querySelector('#gertrud').addEventListener('click', () =>{
// // her bliver der lavet en eventlistener der gør at når man klikker på id'et oluf så vil der ske et event
//         udskriv("Gertrud", "65");
// // her bliver funktionen udskriv kaldt og der bliver brugt værdierne gertrud og 65 i den
//         });

    function udskriv(navn, alder, kon) {
        var elem  = document.getElementById('info');
            if (kon == "m") {
// her bliver der lavet en if sætning. Hvis parameteret kon er m så vil den første sætning bliver udført
// ellers går den videre til else sætningen
                elem.textContent = "Jeg hedder " + navn + " og jeg er " + alder + " år og jeg er en mand";
                console.log("Jeg hedder", navn, "og jeg er", alder, "år og jeg er en mand");
            } else {
// her er else sætningen som bliver udført fordi kon ikke var m
                elem.textContent = "Jeg hedder " + navn + " og jeg er en kvinde";
                console.log("Jeg hedder", navn, "og jeg er en kvinde");
            }
    }
    document.querySelector('#oluf').addEventListener('click', () =>{
        udskriv("Oluf", "70", "m");
        });
        document.querySelector('#gertrud').addEventListener('click', () =>{
        udskriv("Gertrud", "65", "k");
        });
});