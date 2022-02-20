const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
total = 0;
Number(total);

myHeaders = new Headers();

items = "./assets/js/items.json";
basket = "./assets/js/basket.json";


fetch(items)
.then(response => response.json())
.then(json => {
    articles = JSON.stringify(json),
    localStorage.setItem('articles', articles);
});

fetch(basket)
.then(response => response.json())
.then(json => {
    panier = JSON.stringify(json);
    localStorage.setItem('panier', panier);
});


function refreashAll(panier){
    panier = JSON.stringify(panier);
    localStorage.setItem('panier', panier);
}

function getPanier() {
    element = localStorage.getItem('panier');
    element = JSON.parse(element);
    return element;
}

function getItems(){
    element =  localStorage.getItem('articles');
    element =  JSON.parse(element);
    return element;
}


window.onload = function(){
    
    section2Cards1 = document.querySelector('.section2-cards-first');
    section2Cards2 = document.querySelector('.section2-cards-second');
    loaditems();

    document.querySelector(".hamburger-container").addEventListener('click', myFunction);
    panierBtn = document.querySelectorAll('.basket');

    panierBtn.forEach(element => {
        element.addEventListener('click', addBasket);    
    });
    panierBox = document.querySelector('#basket');
    panierContainer = document.querySelector('#basketcontent');
    panierClose = document.querySelector('#closebasket');
    panierClose.addEventListener('click', openBasket);
    panierTotal = document.querySelector('#basketotal');
}


function loaditems() {
    element = getItems();
    for (i=0; i < 4; i++){
        section2Cards1.innerHTML += '<div class="section2-card">'+
        '<a href="#" data-item="'+element[i].data+'">'+
            '<img class="section2-img" src="assets/img/'+element[i].img+'" alt="" srcset="">'+
        '</a>'+
        '<div class="section2-btns">'+
            '<div class="section2-btn">'+
                '<a data-item="'+element[i].data+'" class="basket">'+
                    '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">'+
                        '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />'+
                    '</svg>'+
                '</a>'+
            '</div>'+
            '<div class="section2-btn">'+
                '<a href=""  data-item="'+element[i].data+'">'+
                    '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">'+
                        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />'+
                    '</svg>'+
                '</a>'+
            '</div>'+
        '</div>'+
        '<div class="section2-text">'+
            '<a href="#"  data-item="'+element[i].data+'">'+
                '<p>'+element[i].title+'</p>'+
            '</a>'+
            '<a href="#"  data-item="'+element[i].data+'">'+
                '<p>'+element[i].price+'</p>'+
            '</a>'+
        '</div>'+
    '</div>';
    };

    for (i=4; i <= 7; i++){
        section2Cards2.innerHTML += '<div class="section2-card">'+
        '<a href="#" data-item="'+element[i].data+'">'+
            '<img class="section2-img" src="assets/img/'+element[i].img+'" alt="" srcset="">'+
        '</a>'+
        '<div class="section2-btns">'+
            '<div class="section2-btn">'+
                '<a data-item="'+element[i].data+'" class="basket">'+
                    '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">'+
                        '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />'+
                    '</svg>'+
                '</a>'+
            '</div>'+
            '<div class="section2-btn">'+
                '<a href=""  data-item="'+element[i].data+'">'+
                    '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">'+
                        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />'+
                    '</svg>'+
                '</a>'+
            '</div>'+
        '</div>'+
        '<div class="section2-text">'+
            '<a href="#"  data-item="'+element[i].data+'">'+
                '<p>'+element[i].title+'</p>'+
            '</a>'+
            '<a href="#"  data-item="'+element[i].data+'">'+
                '<p>'+element[i].price+'</p>'+
            '</a>'+
        '</div>'+
    '</div>';

    };
    
}

function myFunction() {
    this.classList.toggle("change");
}

function addBasket() {
    panier = getPanier();
    item = panier.find(item => item.data);
    item.qtt++;
    refreshBasket();
}

total = 0
function refreshBasket() {
    console.log("salut");
    panier = getPanier();
    basket = JSON.stringify(panier);
    localStorage.setItem('panier', basket);
    
    panier.forEach(element =>{
        occurences = document.querySelector('.closediv'+element.data+'');
        total2 = panier.reduce((total, item) => total + item.price * item.qtt, 0);
        
        totalFloor = Math.ceil(total2 *100)/100;
        stringTotal = String(totalFloor);
        afficheTotal = stringTotal.replace('.', ' € ');
        panierTotal.innerHTML = '<p>Total du panier : '+afficheTotal+'</p>';
        panierBox.classList = "";
        if(element.qtt >0){
            if (occurences != null){
                occurences.innerHTML = '<p class="basket-row closediv'+element.data+'"><span>'+element.title+'</span> <span class="qtt'+element.data+'">Qtt : '+element.qtt+'</span><a id="btnpanier'+element.data+'" href="#" class="basketrow-right close'+element.data+'"><img class="cross" src="assets/img/cross.png"></a></span></p>'+
                '<p class="basket-row closediv'+element.data+'"><span class="priceunit priceunit'+element.data+' closediv'+element.data+'"></span></p>'+
                '<p class="basket-row closediv'+element.data+'"><span class="price'+element.data+' closediv'+element.data+'">Total de l\'article : '+updateTotal(countOccurrences(panier, element.data)*element.price)+'</span></p>';
                btnbask = document.querySelectorAll('#btnpanier'+element.data);
                btnbask.forEach(btns => {
                    btns.addEventListener('click', function(){
                        countitem = countOccurrences(panier, element.data);
                        delBasket();
                    })
                });
            }
            else {
                panierContainer.innerHTML += '<p class="basket-row closediv'+element.data+'"><span>'+element.title+'</span> <a href="#" class="basketrow-right close'+element.data+'"><img class="cross" src="assets/img/cross.png"></a></p>'+
                '<p class="basket-row closediv'+element.data+'"><span class="priceunit priceunit'+element.data+' closediv'+element.data+'"></span></p>'+
                '<p class="basket-row closediv'+element.data+'"><span class="price'+element.data+' closediv'+element.data+'"></span> </p>';
                unitaire = document.querySelector('.priceunit'+element.data+'');
                unitaire.innerHTML = 'Prix unitaire : '+element.price+'';
                btnbask = document.querySelectorAll('#btnpanier'+element.data);
                btnbask.forEach(btns => {
                    btns.addEventListener('click', function(){
                        countitem = countOccurrences(panier, element.data);
                        delBasket();
                    })
                });
            }
        }
    });
}

function updateTotal(total) {
    totalFloor = Math.ceil(total *100)/100;
    
    return totalFloor;
}

function openBasket(){
    panierBox.classList.toggle("none");
}

// function delBasket(data, price, qtt, total){
//     del = 0;
//     qtt = qtt -1;
//     for (i=0; i<= panier.length; i++) {
//         if (panier[i] == data && del != 1)
//         {
//             panier[i] = null;
//             del = 1;
//             if (qtt > 0) {
//                 toPrice = document.querySelector('.price'+data);
//                 toQuant = document.querySelector('.qtt'+data);
//                 toQuant.innerHTML = 'Qtt : '+countOccurrences(panier, data)+'';       
//             }if (qtt<=0) {
//                 toClose = document.getElementsByClassName("closediv"+data);
//                 for (i=0; i<=toClose.length-1; i++){
//                         toClose[i].remove();   
//                 }
//             }
//         }
//         // refreshBasket(data, total);
//     }
//     total = total - price;
//     console.log(total);
    
// }


function delBasket() {
    panier = getPanier();
    item = panier.find(item => item.data);
    item.qtt--;
    refreashAll(panier);
    refreshBasket()
}

