// document.addEventListener("DOMContentLoaded", event => {
//         var count = 0;

//         document.querySelector('#clickOnMe').addEventListener('click', () =>{
//         clickOnButton();
// });
//         function clickOnButton () {
//                 count++;
//                 if (count <= 1) {
//                         var elem  = document.getElementById('text');
//                         elem.textContent = "Du har trykket på knappen";
//                 } else {
//                         var elem  = document.getElementById('text');
//                         elem.textContent = "Du har trykket på knappen " + count + " gange";
//                 }
//         }
// });
document.addEventListener("DOMContentLoaded", event => {
        var count = 0;

        document.querySelector('#clickOnMe').addEventListener('click', () =>{
        clickOnButton();
});
        function clickOnButton () {
                count++;
                // her giver man count +1 for hver gang der bliver klikket
                console.log(count);
                var elem  = document.getElementById('text');
                // her bliver der lavet en variable som bliver brugt i linje 31, 35 og 37
                if (count == 1) {
                        elem.textContent = "Dette er første gang du trykker på knappen";
                        // her bliver der ændret i teksten fra id'et text i htmlen
                } else
                 if (count == 2) {
                        elem.textContent = "Du har trykket på knappen igen";
                } else {
                        elem.textContent = "Du har trykket på knappen " + count + " gange";
                        // her bliver der ændret i teksten fra id'et text i htmlen og der bliver sat vaiablen count ind
                }
        
        }
});