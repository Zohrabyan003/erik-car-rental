if (document.body.getAttribute("data-page-id") == "4") {
    let params = new URLSearchParams(window.location.search)
    let products = JSON.parse(localStorage.getItem("products"))

    if (!params.get("sku")) {
        window.location.href = "/"
    } else {
        let found = products.find((product) => product.sku == params.get("sku"));

        if (!found) {
            window.location.href = "/"
        } else {
            // console.log(found);
            document.querySelector("#product-title").innerHTML = found.title
            document.querySelector("#price").innerHTML = found.price
            let attributes = JSON.parse(localStorage.getItem("attributes"))
            found.attributes.forEach(attribute => {
                let found2 = attributes.find((att) => att.id == attribute.id);
                let found3 = found2.values.find((att) => att.id == attribute.value);

                let detale = document.createElement("div")
                detale.className = "detale"
                let detalis_img = document.createElement("div")
                detalis_img.className = "detalis-img"
                let img = document.createElement("img")
                img.src = found2.icon
                let text = document.createElement("div")
                text.className = "detalis-text"
                let att_title = document.createElement("p")
                att_title.innerHTML = found2.name
                att_title.className = "p1"
                let att_val = document.createElement("p")
                att_val.className = "p2"
                att_val.innerHTML = found3.value
                detale.append(detalis_img)
                detalis_img.append(img)
                detale.append(text)
                text.append(att_title)
                text.append(att_val)
                document.querySelector(".product-info").append(detale)
            });
            let pr_images = found.product_img
            pr_images.forEach(pr_image => {
                let mySwiper2 = document.querySelector(".mySwiper2 .swiper-wrapper")
                let mySwiper = document.querySelector(".mySwiper .swiper-wrapper")
                let swiper_slide = document.createElement("div")
                swiper_slide.className = "swiper-slide"
                let img = document.createElement("img")
                img.src = pr_image
                swiper_slide.append(img)
                let swiper_slide2 = swiper_slide.cloneNode(true)
                mySwiper2.append(swiper_slide)
                mySwiper.append(swiper_slide2)
            })

            found.bullet_list.forEach(bullet=>{
                let equipments = document.querySelector(".equipments")
                let b_img = document.createElement("img")
                b_img.src = "/images/bullet.png"
                let  b = document.createElement("div")
                b.innerHTML = bullet
                console.log(b);
                equipments.append(b)
                equipments.append(b_img)
            })
        }
    }
}