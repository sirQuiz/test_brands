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

        buttonOrderAtoZ.addEventListener("click", () => {
            listOfBrands.innerHTML = "";
            brandsNames.sort();

            for(let i = 0; i < brandsNames.length; i++) {
                listOfBrands.innerHTML += `<li class="list__item list__item--new js-list__item">${brandsNames[i]}</li>`;
            }
            let newList = document.querySelectorAll(".list__item--new");

            newList.forEach((item, index) => {
                item.style.animation = `fade 1s ease ${index}s`;
                item.addEventListener("animationend", () => {
                    item.classList.add('item--visible');
                });
            });
        });

        buttonOrderZtoA.addEventListener("click", () => {
            listOfBrands.innerHTML = "";
            brandsNames.sort();
            brandsNames.reverse();
            
            for(let i = 0; i < brandsNames.length; i++) {
                listOfBrands.innerHTML += `<li class="list__item list__item--new js-list__item">${brandsNames[i]}</li>`;
            }
            let newList = document.querySelectorAll(".list__item--new");

            newList.forEach((item, index) => {
                item.style.animation = `fade 1s ease ${index}s`;
                item.addEventListener("animationend", () => {
                    item.classList.add('item--visible');
                });
            });
        });
    };

    changeOrder();
}());