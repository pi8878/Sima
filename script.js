// 
document.addEventListener('DOMContentLoaded', function () {
    // Get all the navigation links
    var navLinks = document.querySelectorAll('nav a');

    // Attach a click event listener to each navigation link
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Get the target section id from the href attribute
            var targetSectionId = link.getAttribute('href').substring(1);

            // Scroll to the target section
            document.getElementById(targetSectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
