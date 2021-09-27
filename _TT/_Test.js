(function() {
    'use strict';

    let allListItemsEl = document.getElementsByClassName("ListItem");

    for (let i = 0; i < allListItemsEl.length; i++) {
        const listItemEl = allListItemsEl[i];
        //let attributeNames = { h4: "data-h4", a: "data-a", img: "data-img", p: "data-p" };
        //const data = { h4: listItemEl.getAttribute(attributeNames.h4), a: listItemEl.getAttribute(attributeNames.a), img: listItemEl.getAttribute(attributeNames.img), p: listItemEl.getAttribute(attributeNames.p) };
        let attributeNames = ["data-h4", "data-a", "data-img", "data-p"];
        const data = { h4: listItemEl.getAttribute(attributeNames[0]), a: listItemEl.getAttribute(attributeNames[1]), img: listItemEl.getAttribute(attributeNames[2]), p: listItemEl.getAttribute(attributeNames[3]) };
        //Remove date from ListItem
        for (let k = 0; k < attributeNames.length; k++) {
            const attributeName = attributeNames[k];
            listItemEl.removeAttribute(attributeName);
        }
        ///New Els
        //Img
        let nElAImg = document.createElement("a");
        let nElImg = document.createElement("img");
        //Div
        let nElDiv = document.createElement("div");
        //H4
        let nElH4 = document.createElement("h4");
        let nElAH4 = document.createElement("a");
        //P
        let nElP = document.createElement("p");
        let nElA = document.createElement("a");
        ///Filling & attributes & placing
        //Link
        {
            const allA = [nElAImg, nElAH4, nElA];
            for (let k = 0; k < allA.length; k++) {
                const elA = allA[k];
                elA.href = data.a;
                elA.target = "_blank";
            }
        }
        //Name
        {
            const allName = [nElA, nElAH4];
            for (let k = 0; k < allName.length; k++) {
                const elA = allName[k];
                elA.innerHTML = data.h4;
            }
        }
        //Img
        nElAImg.classList.add("img");
        nElImg.src = data.img;
        nElAImg.appendChild(nElImg);
        //H4
        nElH4.appendChild(nElAH4);
        nElP.innerText = data.p;
        //Div
        {
            const allFirstChildren = [nElH4, nElP, nElA];
            for (let k = 0; k < allFirstChildren.length; k++) {
                const el = allFirstChildren[k];
                nElDiv.appendChild(el);
            }
        }
        //Add to ListItem
        {
            const allFirstChildren = [nElAImg, nElDiv];
            for (let k = 0; k < allFirstChildren.length; k++) {
                const el = allFirstChildren[k];
                listItemEl.appendChild(el);
            }
        }


        let ss = `<a href="${data.a}"target="_blank"class="img"><img src="${data.img}"></a><div><h4><a href="${data.a}"target="_blank">${data.h4}</a></h4><p>${data.p}</p><a href="${data.a}"target="_blank">${data.h4}</a></div>`;
    }
})();