
function filterSelection(category) {
    let cards, i;
    cards = document.getElementsByClassName("project-card");
    if (category == "all") category = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
        if (cards[i].getAttribute('data-category').indexOf(category) > -1) {
            cards[i].style.display = "block"; // Or "flex", "grid" depending on your layout
        }
    }

    // Add active class to the current button
    let btns = document.getElementsByClassName("filter-button");
    for (i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(" active", "");
    }
    event.currentTarget.className += " active";
}

// Show all cards by default
// Ensure this runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    filterSelection('all');
});
