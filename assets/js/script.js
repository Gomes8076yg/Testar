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


// ======================
// FILTRO DE PRODUTOS
// ======================

const filterButtons = document.querySelectorAll(".filter-btn");
const produtos = document.querySelectorAll(".produto");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filtro = button.dataset.filter;

        produtos.forEach(produto => {

            if(filtro === "all"){

                produto.classList.remove("hide");

            }else{

                if(produto.classList.contains(filtro)){

                    produto.classList.remove("hide");

                }else{

                    produto.classList.add("hide");

                }

            }

        });

    });

});



// ==========================
// PORTFÓLIO PREMIUM V3
// ==========================


const portfolioData = [

{
title:"Cozinhas",
images:[
"assets/images/projetos/cozinha1.jpg",
"assets/images/projetos/cozinha2.jpg",
"assets/images/projetos/cozinha3.jpg",
"assets/images/projetos/cozinha4.jpg"
]
},

{
title:"Quartos",
images:[
"assets/images/projetos/quarto1.jpg",
"assets/images/projetos/quarto2.jpg",
"assets/images/projetos/quarto3.jpg",
"assets/images/projetos/quarto4.jpg"
]
},

{
title:"Sofás",
images:[
"assets/images/projetos/sofa1.jpg",
"assets/images/projetos/sofa2.jpg",
"assets/images/projetos/sofa3.jpg",
"assets/images/projetos/sofa4.jpg"
]
},

{
title:"Móveis Diversos",
images:[
"assets/images/projetos/movel1.jpg",
"assets/images/projetos/movel2.jpg",
"assets/images/projetos/movel3.jpg",
"assets/images/projetos/movel4.jpg"
]
}

];

const portfolioImage=document.getElementById("portfolioImage");
const portfolioTitle=document.getElementById("portfolioTitle");
const portfolioDots=document.getElementById("portfolioDots");
const portfolioTabs=document.querySelectorAll(".portfolio-tab");
const portfolioCounter=document.getElementById("portfolioCounter");

let currentCategory=0;
let currentImage=0;
let touchStartX = 0;
let touchEndX = 0;

function renderPortfolio(){

if(!portfolioImage) return;

portfolioImage.style.opacity="0";

setTimeout(()=>{

portfolioImage.src=portfolioData[currentCategory].images[currentImage];

portfolioTitle.textContent=portfolioData[currentCategory].title;

portfolioImage.style.opacity="1";

},200);

portfolioDots.innerHTML="";

portfolioData[currentCategory].images.forEach((img,index)=>{

const dot=document.createElement("span");

if(index===currentImage){

dot.classList.add("active");

}

dot.onclick=()=>{

currentImage=index;

renderPortfolio();

};

portfolioDots.appendChild(dot);

});

portfolioTabs.forEach((tab,index)=>{

tab.classList.toggle("active",index===currentCategory);

});

}

portfolioTabs.forEach((tab,index)=>{

tab.addEventListener("click",()=>{

currentCategory=index;

currentImage=0;

renderPortfolio();

});

});

if(portfolioImage){

portfolioImage.addEventListener("touchstart",(e)=>{

touchStartX=e.changedTouches[0].screenX;

});

portfolioImage.addEventListener("touchend",(e)=>{

touchEndX=e.changedTouches[0].screenX;

const swipeDistance=touchStartX-touchEndX;

if(Math.abs(swipeDistance)<50) return;

if(swipeDistance>0){

currentImage++;

if(currentImage>=portfolioData[currentCategory].images.length){

currentImage=0;

}

}else{

currentImage--;

if(currentImage<0){

currentImage=portfolioData[currentCategory].images.length-1;

}

}

renderPortfolio();

});

}


setInterval(()=>{

if(!portfolioImage) return;

currentImage++;

if(currentImage>=portfolioData[currentCategory].images.length){

currentImage=0;

}

renderPortfolio();

},6000);

renderPortfolio();