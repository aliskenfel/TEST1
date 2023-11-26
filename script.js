document.addEventListener("DOMContentLoaded", function () {
    // Show the loader immediately on page load
    document.querySelector(".loader-wrapper").style.display = "flex";

    // Hide the loader when all resources (including images) are loaded
    window.addEventListener("load", function () {
        document.querySelector(".loader-wrapper").style.display = "none";
    });
});
