(function() {
    'use strict';

    //Get pervious URL
    let preUrl;
    try {
        preUrl = new URL(document.referrer);
    } catch (error) {}

    if (preUrl != undefined) {
        const curHostname = location.hostname;

        //Enable Go Back Button if previous domain is the same
        if (preUrl.hostname == curHostname) {
            const btnGoBack = document.getElementById("GoBack");
            btnGoBack.classList.remove("DisplayNone");
            btnGoBack.addEventListener("click", function() {
                window.history.back();
            });

            //Enable nav if previous subDir is Dauw_Jonas or none
            let subDir = preUrl.pathname.substring(1);
            subDir = subDir.substring(0, subDir.indexOf("/"));
            subDir == "" ? subDir = "Dauw_Jonas" : "";
            if (subDir == "Dauw_Jonas") {
                //Show nav only here
                //++++
            }
        }
    }
})();