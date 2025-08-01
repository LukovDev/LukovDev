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


window.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.add('disable-transitions');

    setTimeout(() => {
    document.documentElement.classList.remove('disable-transitions');
    }, 50);

    const toggle = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");
    const root = document.documentElement;
   
    const sunBg = document.querySelector('.label-sun-bg');
    const moonBg = document.querySelector('.label-moon-bg');
   
    function applyTheme(theme) {
        if (theme === 'dark') {
            root.classList.add('dark-theme');
            toggle.checked = true;
            icon.src = "content/images/icons/moon.png";
            if (sunBg && moonBg) {
                sunBg.style.opacity = '0';
                moonBg.style.opacity = '1';
            }
        } else {
            root.classList.remove('dark-theme');
            toggle.checked = false;
            icon.src = "content/images/icons/sun.png";
            if (sunBg && moonBg) {
                sunBg.style.opacity = '1';
                moonBg.style.opacity = '0';
            }
        }
    }
   
    const saved = localStorage.getItem("theme") || "dark";
    applyTheme(saved);
   
    toggle.addEventListener("change", () => {
        const theme = toggle.checked ? "dark" : "light";
        localStorage.setItem("theme", theme);
        applyTheme(theme);
    });
});
