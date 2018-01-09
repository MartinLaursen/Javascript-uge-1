document.addEventListener("DOMContentLoaded", event => {
    // denne kode gør at mit script er blevet indlæst på siden
    console.log("Side indlæst");
    document.querySelector('button').addEventListener('click', () =>{
        console.log('knap trykket');
    });
    // denne kode gør at når man trykker på button så vil den logge "knap trykket"
    // den lytter på alle button i htmlen. Der skal være # for en id og . for en class.
});


