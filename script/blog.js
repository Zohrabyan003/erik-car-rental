if (document.body.getAttribute("data-page-id") == "5") {

    let posts = JSON.parse(localStorage.getItem("posts")) || []
    let per_page = 3
    let page = 0
    let postsPages = []
    let loadMoreBtn = document.querySelector(".loadmore")
    let postsContainer = document.querySelector(".posts")

    for (let i = 0; i < Math.ceil(posts.length / per_page); i++) {
        postsPages.push(posts.slice(i * per_page, i * per_page + per_page))
    }

    function loadPosts() {
        postsPages[page].forEach(post => {
            console.log(post);

            let postDiv = document.createElement("div")
            postDiv.className = "post"
            postDiv.innerHTML = `
                <a href="/pages/post.html?post=${post.id}">
                <div class="post_img">
                    <img src="${post.featuredImage}">
                </div>
                <div class="post_text">
                    <h3>${post.title}</h3>
                    <p class="1">${post.excerpt}</p>
                    <span>${post.date}</span>
                </div>
                <button class="read_more">Read More <i class="fa fa-arrow-right"></i></button>
                </a>
                `
            postsContainer.append(postDiv)
        })

        page++
        if (page >= postsPages.length) {
            loadMoreBtn.remove()
        }
    }

    loadMoreBtn.addEventListener("click", loadPosts)
    loadPosts()

    let url = document.createElement("a")
    let u = "/pages/product.html?sku="
    if (product.sku) {
        u += product.sku
    }
    url.href = u
    url.append(postDiv)
    postsContainer.append(url)
}





