if (document.body.getAttribute("data-page-id") == "1") {
    let products = JSON.parse(localStorage.getItem("products"))
    let attributes = JSON.parse(localStorage.getItem("attributes"))
    // console.log(attributes);

    let products_grid = document.querySelector(".products_grid")




    let per_page = 5
    let page = 1
    let products2 = []
    let loadMoreBtn = document.querySelector("button.loadMore")
    // console.log(loadMoreBtn);

    for (let i = 0; i < Math.ceil(products.length / per_page); i++) {
        let temp = []

        for (let l = i * per_page; l < i * per_page + per_page; l++) {
            temp.push(products[l])
        }
        products2.push(temp)
    }




    loadMoreBtn.addEventListener("click", () => {
        page++
        if (page == products2.length) {
            loadMoreBtn.remove()
        }
        loadProducts()
    })
    function loadProducts() {
        // console.log(products2[page - 1]);
        products2[page - 1].forEach(product => {
            let card = document.createElement("div")
            card.className = "card"
            let card_img = document.createElement("div")
            let img = document.createElement("img")
            img.src = product.product_img[0]
            card_img.className = "card_img"
            card_img.append(img)
            card.append(card_img)
            let allAtts = document.createElement("div")
            allAtts.className = "allAtts"
            let title = document.createElement("h3")
            title.innerHTML = product.title
            card.append(title)
            product.attributes.forEach(attribute => {
                if (attribute.id == 1 || attribute.id == 2 || attribute.id == 4) {
                    let att = attributes.find((element) => element.id == attribute.id);
                    let val = att.values.find((element) => element.id == attribute.value);
                    let icon = att.icon
                    // console.log(val.value);
                    // console.log(icon);
                    let img = document.createElement("img")
                    img.src = icon
                    let name = document.createElement("p")
                    name.innerHTML = val.value
                    let attDiv = document.createElement("div")
                    attDiv.append(img, name)
                    allAtts.append(attDiv)
                    attDiv.className = "attDiv"

                }
            })
            card.append(allAtts)
            products_grid.append(card)
            let url = document.createElement("a")
            let u = "/pages/product.html?sku="
            if (product.sku) {
                u += product.sku
            }
            url.href = u
            url.append(card)
            products_grid.append(url)
        });
    }
    loadProducts()
}