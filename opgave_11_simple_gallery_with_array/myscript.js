var filnavne = [
    "img/cd1.jpg",
    "img/cd2.jpg",
    "img/cd3.jpg"
];
var i = 0;
var pic = document.getElementById("myPic");
document.addEventListener("DOMContentLoaded", event => {
    function opdater_billede() {
        pic.setAttribute('src', filnavne[i]); 
    };
    function naeste_billede () {
        document.querySelector('#next').addEventListener('click', () =>{
            // i++ til slut af if skal være øverst før det virker, ellers giver den fejl på sidste billede
            i++;
            if (i > 2) {
                i = 0;
            }
            pic.setAttribute('src', filnavne[i]);
        });
    }
    function forige_billede () {
        document.querySelector('#previous').addEventListener('click', () =>{
            i--;
            if (i < 0) {
                i = 2;
            }
            pic.setAttribute('src', filnavne[i]);
        });
    }
    opdater_billede();
    naeste_billede();
    forige_billede();
    
});