// domcontentloaded zorgt ervoor dat de functie alleen werkt zodra de html document volledig is geladen
document.addEventListener("DOMContentLoaded", function () {
    //css selectors
    // hier selecteer ik alle li elementen binnen de element met de ID "filterButtons"
    const filterButtons = document.querySelectorAll("#filterButtons li");
    // hier selecteer ik alle elemenenten met een card class binnen een element met de id "initiatieven"
    const cards = document.querySelectorAll("#initiatieven .card");

    //de foreach loop zorgt ervoor dat er voor elke filter knop een event listener van de "click" event wordt toegevoegd
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            
            //hier haal ik de waarde van data-filter op van de geselecteerde knop.
            const filterValue = this.getAttribute("data-filter");
            
            /* hier wordt de active class in of uitgeschakelt
            zo is het duidelijk of een knop actief is of niet*/
            this.classList.toggle("active");

            /* Array van alle actieve filters:
            hier maak ik een array activefilters (collectie van items met soort gelijke data types)
             de array selecteert alle elementen met een active class. de map functie gebruik ik om de waarde van data-filter uit elke element te halen. */
            const activeFilters = Array.from(document.querySelectorAll("#filterButtons li.active")).map(filter => filter.getAttribute("data-filter"));

            /* Event listener voor de filterknoppen: Hier ga ik door elke kaart en haal ik de waarde van de data category op. Dan kijk ik
            of alle kaarten zichtbaar zijn en/of een bepaalde categorie en op basis van dit is de display op block of none*/
            cards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                const shouldDisplay = activeFilters.includes("all") || activeFilters.includes(cardCategory);

                card.style.display = shouldDisplay ? "block" : "none";
            });
        });
    });
});
