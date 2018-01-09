document.addEventListener("DOMContentLoaded", event => {
    var urlparametre = hentAlleUrlParametre();
    console.log(urlparametre.valg);
    var elem  = document.getElementById('links');
    //urlparametre.valg henter navnet på urlen efter =. Valg kan være navnet på en pris, navn eller kategori
    elem.textContent = "Du har valgt " + urlparametre.valg;



// Dette styk kode bliver brugt til URL parameter, den skal ikke ændres og den høre til det øverste kode
    function hentAlleUrlParametre (url = "") {
        
            // Hvis man ikke giver den en specifik URL, så bruger den browserens aktuelle URL.
            if (url == "") url = window.location.href;
        
            url = url + "";  // Dette sørger for, at der arbejdes med en KOPI af teksten og ikke den oprindelige tekst.
            var urlParams = {};
            url.replace (
                new RegExp("([^?=&]+)(=([^&]*))?", "g"),
                function ($0, $1, $2, $3) {
                    urlParams[$1] = $3;
                }
            );
        
            return urlParams;
        }


});