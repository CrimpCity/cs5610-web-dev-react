const TransparentScroll = () => {
    const navbar = document.getElementById("top-nav-bar");
    if (navbar) {
        window.onscroll = (e) => {
            if (window.pageYOffset > 100) {
                return navbar.classList.add("bg-dark", "border-bottom-0", "shadow");
            } else {
                return navbar.classList.remove("bg-dark", "border-bottom-0", "shadow");
            }
        };
    }
}


export default TransparentScroll;