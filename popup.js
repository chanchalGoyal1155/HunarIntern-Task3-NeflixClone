document.addEventListener('DOMContentLoaded', () => {
    var modal = document.getElementById("popup-modal");
    var closeBtn = document.getElementsByClassName("close-btn")[0];

    // Check if modal exists before proceeding
    if (!modal) {
        console.error('Popup modal element not found!');
        return;
    }

    // Movie data
    var movies = {
        card1: {
            img: "assets/images/movie6.jpg",
            title: "The Gray Man",
            description: "An ordinary insurance agent channeling his rage..."
        },
        card2: {
            img: "assets/images/movie11.jpg",
            title: "sector 36",
            description: "Description of another movie goes here."
        },
        card3: {
            img: "assets/images/movie8.avif",
            title: "NightBooks",
            description: "This is the description for movie 3."
        },
        card4: {
            img: "assets/images/movie9.jpg",
            title: "Night Teeth",
            description: "This is the description for movie 4."
        },
        card5: {
            img: "assets/images/movie10.png",
            title: "Ovet The Moon",
            description: "This is the description for movie 5."
        }
    };

    // Function to open the popup with movie data
    function openPopup(movie) {
        if (!modal) {
            console.error('Modal not found');
            return;
        }

        modal.style.display = "block";
        document.getElementById("popup-image").src = movie.img;
        document.getElementById("popup-title").innerText = movie.title;
        document.getElementById("popup-description").innerText = movie.description;
    }

    // Add click event listeners for each card
    var card1 = document.getElementById("card-1");
    var card2 = document.getElementById("card-2");
    var card3 = document.getElementById("card-3");
    var card4 = document.getElementById("card-4");
    var card5 = document.getElementById("card-5");

    // Check if the cards exist and assign onclick
    if (card1) card1.onclick = function () { openPopup(movies.card1); };
    if (card2) card2.onclick = function () { openPopup(movies.card2); };
    if (card3) card3.onclick = function () { openPopup(movies.card3); };
    if (card4) card4.onclick = function () { openPopup(movies.card4); };
    if (card5) card5.onclick = function () { openPopup(movies.card5); };

    // Close button functionality
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    // Close the modal if clicked outside
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
