window.onscroll = function() {
    const button = document.getElementById("scroll-to-top");

    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        if (!((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1024))) {
            setTimeout(() => {
                button.classList.add("show");
            }, 10);
        } else {
            button.classList.remove("show");
        }
    } else {
        button.classList.remove("show");
    }
};


function open_link(url) {
    window.location.href = url;
}


function open_link_blank(url) {
    window.open(url, "_blank");
}


function scroll_to(block_id) {
    document.getElementById(block_id).scrollIntoView({ behavior: "smooth" });
}
