// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }

});

// =========================
// MENU MOBILE
// =========================

const menuButton = document.querySelector(".menu-mobile");
const menu = document.querySelector(".navbar ul");

if(menuButton && menu){

    menuButton.addEventListener("click", () => {

        menu.classList.toggle("active");

        const icon = menuButton.querySelector("i");

        if(menu.classList.contains("active")){

            icon.classList.remove("bi-list");
            icon.classList.add("bi-x-lg");

        }else{

            icon.classList.remove("bi-x-lg");
            icon.classList.add("bi-list");

        }

    });

    document.querySelectorAll(".navbar ul a").forEach(link=>{

        link.addEventListener("click",()=>{

            menu.classList.remove("active");

            const icon = menuButton.querySelector("i");

            icon.classList.remove("bi-x-lg");
            icon.classList.add("bi-list");

        });

    });

}
