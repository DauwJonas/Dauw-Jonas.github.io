document.getElementById("NSFWReviewsButtonShow").addEventListener("click", function() {
    var El = document.getElementById("NSFWReviews");
    El.parentElement.removeChild(El);
    var El = new Array();
    El = document.getElementsByClassName("NSFW");
    for (let i = 0; i < El.length; i++) {
        El[i].style.display = "block";
    }
});