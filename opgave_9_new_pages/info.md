Opgave 9.1: Skift underside uden at genindlæse siden og uden database
(Husk reglerne)

Indsæt følgende kode på din side. Find selv to forskellige billeder.
Du må gerne lave små ændringer i den udleverede HTML, hvis du føler der er brug for det.

<div class='underside'>
	<h2>Side 1</h2>
	<p>Dette er første side.</p>
	<img src='billeder/side1.jpg'>
</div>

<div class='underside'>
	<h2>Side 2</h2>
	<p>Dette er anden side.</p>
	<img src='billeder/side2.jpg'>
</div>
Gør underside 2 usynlig via CSS filen.

Placér 2 links i toppen af siden med teksterne "Side 1" og "Side 2".

Når der trykkes på et link, så skal tilhørende underside div vises mens det andet gemmes.

Siden må ikke genindlæses, når der trykkes på linksne, så husk at forhindre deres default handling.