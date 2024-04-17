const dataWrapper = document.querySelector(".data")

const id = new URLSearchParams(window.location.search).get("id");
const search = document.querySelector(".search")
// async function fakeApi() {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const mov = await response.json()
//     console.log(mov,"mov");
// }
// fakeApi()
let products=[]
fetch("https://fakestoreapi.com/products").then(res => {
    return res.json()
}).then(data => {
    products=data
renderData(data)
})
function renderData(arr) {
    dataWrapper.innerHTML=""
    arr.forEach(dataD => {
        dataWrapper.innerHTML +=`
    <div class="col-lg-3 data-item m-3 ">
  <img src="${dataD.image}" alt="" width="200" class="text-center" height="250">
 <h5>${dataD.title}</h5>
    <p><b>Price:</b> ${dataD.price}$</p>
    <p><b>Category:</b>${dataD.category}</p>
    <p><b>Rating:</b>${dataD.rating.rate}</p>
    <a href="./detail.html?id=${dataD.id}">Detail</a>
</div>
`})
}
search.addEventListener('input',()=>{
    searchProduct(products)
})
function searchProduct(arr) {
    const getProducts=arr.filter((x)=> x.title.trim().toLowerCase().includes(search.value.trim().toLowerCase()))
    // console.log(getProducts);
    renderData(getProducts)
}
const button =document.querySelector(".btn")

button.addEventListener("click",()=>{
    const sorts = products.sort((x,y)=>x.price-y.price)
    renderData(sorts)
})