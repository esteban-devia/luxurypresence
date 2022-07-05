const header = document.querySelector("header")
var lastPosition = 100

window.addEventListener("scroll", function(){
    var scrollTop = window.scrollY
    if (scrollTop > 10){
        header.style.backgroundColor = "#162d54"
    }
    else {
        header.style.backgroundColor = "transparent"
    }
    if(scrollTop - lastPosition >= 100 && lastPosition < scrollTop) {
        header.style.top = "-100px"
        lastPosition = scrollTop
    }
    else if (scrollTop - lastPosition <= 0 && lastPosition > scrollTop && scrollTop > 100) {
        header.style.top = "0"
        lastPosition = scrollTop
    }
})