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
});