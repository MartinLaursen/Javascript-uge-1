document.addEventListener("DOMContentLoaded", event => {
    var urlparametre = hentAlleUrlParametre();
    console.log(urlparametre.valg);
    var elem  = document.getElementById('links');
    //urlparametre.valg henter navnet på urlen efter =. Valg kan være navnet på en pris, navn, kategori osv.
    elem.textContent = "Du har valgt " + urlparametre.valg;

// Dette stykke kode bliver brugt til URL parameter, den skal ikke ændres og den høre til det øverste kode
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


    function showOrHide() {
        var x = document.getElementById("underside2");
        console.log(urlparametre.valg);
        if (urlparametre.valg == "underside1") {
            console.log(x.style.display);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    }
    function showOrHide1() {
        var x = document.getElementById("underside1");
        if (urlparametre.valg == "underside2") {
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    }   
    showOrHide();
    showOrHide1();
});