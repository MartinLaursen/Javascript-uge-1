document.addEventListener("DOMContentLoaded", event => {
    function showOrHide() {
        var x = document.getElementById("underside2");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    function showOrHide1() {
        var x = document.getElementById("underside1");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    } 

    document.getElementById('under1').addEventListener('click', (event) =>{
        event.preventDefault();
        showOrHide();
    });
    document.getElementById('under2').addEventListener('click', (event) =>{
        event.preventDefault();
        showOrHide1();
    });
});