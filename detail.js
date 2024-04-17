
const id = new URLSearchParams(window.location.search).get("id");

const detail = document.querySelector(".detail")
fetch("https://fakestoreapi.com/products"+`/${id}`).then(resp => {
    return resp.json()
}).then(detailD => {
    detail.innerHTML = `
        <div class="col-lg-6">
        <img src="${detailD.image}" alt="" width="300" height="400">
    </div>
    <div class="col-lg-6">
        <h5>${detailD.title}</h5>
        <p><b>Price:</b> ${detailD.price}$</p>
        <p><b>Category:</b>${detailD.category}</p>
        <p><b>Count</b>${detailD.rating.count}</p>
        <p><b>Description</b>${detailD.description}</p>
        <p><b>Rating:</b>${detailD.rating.rate}</p>
    </div>
        `
})