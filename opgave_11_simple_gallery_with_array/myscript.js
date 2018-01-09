var filnavne = [
    "img/cd1.jpg",
    "img/cd2.jpg",
    "img/cd3.jpg"
];
var i = 0;
console.log(filnavne);
document.addEventListener("DOMContentLoaded", event => {
    function opdater_billede() {
        var pic = document.getElementById("myPic");
        pic.setAttribute('src', filnavne[i]); 
    };
    function naeste_billede () {
        document.querySelector('button').addEventListener('click', () =>{
            filnavne[i];
            i = i++;

            // var count = filnavne.length;
            // for (let i = 0; i < count; i++) {
            // }
        });
    }
    opdater_billede();
    naeste_billede();
    
});