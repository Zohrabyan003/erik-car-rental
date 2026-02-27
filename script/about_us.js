if (document.body.getAttribute("data-page-id") == "3") {
    let faqs = document.querySelectorAll(".faqs .faq");

    faqs.forEach(faq => {
        faq.addEventListener("click", () => {

            if (faq.getAttribute("data-open") === "open") {
                faq.setAttribute("data-open", "close");
            } else {
                faqs.forEach(faq2 => faq2.setAttribute("data-open", "close"));
                faq.setAttribute("data-open", "open");
            }
        });
    });
}