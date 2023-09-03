const data=[
    {
        id:1,
        name:"ASUS ROG Strix 27inch 1080P Gaming Monitor (XG276Q)",
        img:"https://m.media-amazon.com/images/I/81G6i0rMUpL._AC_SL1500_.jpg",
        price:239,
        cat:"Gaming",
    },
    {
        id:2,
        name:"ASUS ROG Swift 271440P",
        img:"https://m.media-amazon.com/images/I/71PGYEFoiuL._AC_SL1500_.jpg",
        price:999,
        cat:"Gaming",
    },
    {
        id:3,
        name:"ViewSonic VX2452MH 24 Inch",
        img:"https://m.media-amazon.com/images/I/61qZ898grFL._AC_SL1500_.jpg",
        price: 99,
        cat:"Classic",
    },
    {
        id:4,
        name:"KOORUI 24inch Curved 60Hz Computer Monitor",
        img:"https://m.media-amazon.com/images/I/71O6kpwBMyL._AC_SL1500_.jpg",
        price: 96,
        cat:"Curved",
    },
    {
        id:5,
        name:"Corsair XENEON 27QHD240 27-Inch OLED Gaming Monitor",
        img:"https://m.media-amazon.com/images/I/81Z+SQ3CtcL._AC_SL1500_.jpg",
        price: 850 ,
        cat:"UltraWide",
    },
    {
        id:6,
        name:"Acer Nitro 34 QHD 3440 x 1440 1500R Curved PC Gaming Monitor",
        img:"https://m.media-amazon.com/images/I/71XeeQ77-LL._AC_SL1500_.jpg",
        price: 320,
        cat:"Curved",
    },
]

const productsContainer= document.querySelector('.products')
const searchInput= document.querySelector('.search')
const categoriesContainer= document.querySelector('.cats')
const priceRange= document.querySelector('.priceRange')
const priceValue= document.querySelector('.priceValue')

const displayProducts=(filteredProducts) =>{
    productsContainer.innerHTML=filteredProducts.map(product=>
        `
        <div class="product">
                    <img src=${product.img} alt="">
                    <span class="name">${product.name}</span>
                    <span class="priceText">${product.price}</span>
                </div>
        `
        ).join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e)=>{
    const value= e.target.value.toLowerCase();    
    if(value){
displayProducts(data.filter(item=> item.name.toLowerCase().indexOf(value)!==-1))
    }else{
        displayProducts(data);
    }
})
const setCategories= () =>{
    const allCats= data.map(item=>item.cat);
    const categories=["All",...allCats.filter((item,i)=>{
return allCats.indexOf(item)===i;
    }),
    ];
    categoriesContainer.innerHTML=categories.map(cat=>
       `
       <span class="cat">${cat}</span>
       `).join("")



       categoriesContainer.addEventListener("click",(e)=>{
const selectedCat= e.target.textContent;
selectedCat=== "All" ? displayProducts(data) : displayProducts(data.filter(item=>item.cat===selectedCat))
       });
};
const setPrices = ()=>{
const priceList= data.map(item=>item.price);
const minPrice=Math.min(...priceList);
const maxPrice=Math.max(...priceList);
priceRange.min=minPrice
priceRange.max=maxPrice
priceRange.value=maxPrice
priceValue.textContent="€" + maxPrice
priceRange.addEventListener("input", (e)=>{
    priceValue.textContent="€" + e.target.value
    displayProducts(data.filter(item=>item.price<=e.target.value));
});
};
setCategories()
setPrices()