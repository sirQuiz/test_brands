(function () {
    const changeOrder = () => {
        const listOfBrands    = document.querySelector(".js-list"),
              listItems       = listOfBrands.querySelectorAll(".list__item"),  
              buttonOrderAtoZ = document.querySelector(".js-order-a"),
              buttonOrderZtoA = document.querySelector(".js-order-z");
        let brandsNames = [];
        
        listItems.forEach((item) => {
            brandsNames.push(item.textContent);
        });
        // console.log(brandsNames);
        console.log(typeof(brandsNames));
    

        buttonOrderAtoZ.addEventListener("click", () => {
            listOfBrands.innerHTML = "";
            brandsNames.sort();
            for(let i = 0; i < brandsNames.length; i++) {
                listOfBrands.innerHTML += `<li class="list__item list_item--new list__item--blure js-list__item">${brandsNames[i]}</li>`;
            }
        });

        buttonOrderZtoA.addEventListener("click", () => {
            listOfBrands.innerHTML = "";
            brandsNames.sort();
            brandsNames.reverse();
            for(let i = 0; i < brandsNames.length; i++) {
                listOfBrands.innerHTML += `<li class="list__item js-list__item">${brandsNames[i]}</li>`;
            }
        });
    };

    changeOrder();
}());