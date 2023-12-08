document.addEventListener("DOMContentLoaded", function() {
    // The main function filterObjects will filter through the initiatieven list
    function filterObjects(cardfilter) {
        var content, initiatief;
        content = document.querySelectorAll(".card");
        var initiatievenContent = document.querySelector(".initiatieven-content");

        // Statement to set the value of cardfilter
        if (cardfilter == "all") cardfilter = "";

        // Loop through all cards to reset them and show only the filtered options when a button is clicked
        for (initiatief = 0; initiatief < content.length; initiatief++) {
            removeClass(content[initiatief], "show");
            if (content[initiatief].classList.contains(cardfilter)) addClass(content[initiatief], "show");
        }

        // Toggle the visibility of the initiatieven-content section
        if (cardfilter === "") {
            initiatievenContent.classList.add("show");
        } else {
            initiatievenContent.classList.remove("show");
        }
    }

    function addClass(element, name) {
        element.classList.add(name);
    }

    function removeClass(element, name) {
        element.classList.remove(name);
    }

    filterObjects("all");
});
