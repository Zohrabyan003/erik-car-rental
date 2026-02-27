document.querySelector("#humburger button").addEventListener("click",()=>{
    if (document.querySelector("#humburger").getAttribute("data-open")=="false") {
        document.querySelector("#humburger").setAttribute("data-open","true")
    }else{
        document.querySelector("#humburger").setAttribute("data-open","false")
    } 
})