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
    const toggle = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");
    const slider = document.querySelector(".slider");
    const root = document.documentElement;

    function applyTheme(theme) {
        if (theme === 'dark') {
            root.classList.add('dark-theme');
            toggle.checked = true;
            icon.src = "content/images/icons/moon.png";
            slider.style.backgroundImage = "url('../content/images/icons/moon-bg.png')";
        } else {
            root.classList.remove('dark-theme');
            toggle.checked = false;
            icon.src = "content/images/icons/sun.png";
            slider.style.backgroundImage = "url('../content/images/icons/sun-bg.png')";
        }
    }

    // Подгружаем сохранённую тему
    const saved = localStorage.getItem("theme") || "dark";
    applyTheme(saved);

    // Переключатель темы
    toggle.addEventListener("change", () => {
        const theme = toggle.checked ? "dark" : "light";
        localStorage.setItem("theme", theme);
        applyTheme(theme);
    });
});
