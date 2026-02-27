const scripts = [
    "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
    "/script/hamburger-menu.js",
    "/script/slider.js",
    // "/script/search.js",
    // "/script/register.js",
    "/script/data/products.js",
    "/script/data/attributes.js",
    "/script/data/blog_data.js",
    "/script/product.js",
    "/script/home.js",
    "/script/shop.js",
    "/script/wishlist.js",
    "/script/about_us.js",
    "/script/blog.js",
    "/script/singlepost.js",

];
scripts.forEach(file => {
    const script = document.createElement("script");
    script.src = file;
    document.body.append(script);
});

