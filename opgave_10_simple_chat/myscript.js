document.addEventListener("DOMContentLoaded", event => {

    function chat(navn, besked) {
        var newline = "\r\n";
        var elem = document.getElementById("output");
        elem.style.whiteSpace = "pre";
        // elem.textContent = navn + ": " + besked + newline + elem.textContent;
        elem.innerHTML = `<strong>${navn}</strong> : ${besked}<br>` + elem.innerHTML;
    }
    // chat("Martin", "Hej Christoffer");
    // chat("Christoffer", "Hej Martin. Hvordan går det?");
    // chat("Christoffer", "Hej Martin.");
    
    document.getElementById('send').addEventListener('click', (event) =>{            
        var chatNavn = document.querySelector("#navn");
        var chatBesked = document.querySelector("#besked");
        chat(chatNavn.value, chatBesked.value);
        event.preventDefault();
        chatBesked.value='';
        chatBesked.focus();
    });
});