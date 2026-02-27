if (document.body.getAttribute("data-page-id") == "6") {
    let posts = JSON.parse(localStorage.getItem("posts"))
    let params = new URLSearchParams(window.location.search)
    let post
    if (!params.get("post")) {
        window.location.href = "/pages/blog.html"
    } else {
        post = JSON.parse(localStorage.getItem("posts")).find((post) => post.id == params.get("post"));
        if (!post) {
            window.location.href = "/"
        } else {
            let post_hero = document.querySelector(".post_hero")
            post_hero.style.backgroundImage = `url(${post.featuredImage})`
            document.querySelector(".post_hero h1").innerHTML = post.title
            document.querySelector(".post_hero .read_time").innerHTML = post.readTime + "min. read"
            document.querySelector(".post_hero .post_date").innerHTML = post.date
            document.querySelector(".post_content .main_post_cont").innerHTML = post.content

            let headings = ["h2", "h3", "h4", "h5", "h6"]
            let temp = []
            for (let i = 0; i < headings.length; i++) {
                let el = document.querySelectorAll(".post_content " + headings[i])
                for (let o = 0; o < el.length; o++) {
                    temp.push(el[o])                    
                }
            }
            temp.forEach(el => {
                let text = el.innerText
                console.log(text);
                let a = document.createElement("a")
                let id = text.split(" ").join("-")
                el.id = id
                a.href = "#"+id
                let maxLength = 30
                if (text.length>maxLength) {
                    a.innerHTML = text.substring(0,maxLength)+"..."
                }else{
                    a.innerHTML = text
                }
                document.querySelector(".post_nav .container").append(a)
            });


        }
    }
}