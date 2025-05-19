// イントロ動画
const video = document.getElementById("intro");
const intro = document.getElementById("intro-video");
const main = document.getElementById("main-content");

video.addEventListener("ended", () => {
    intro.style.display = "none"; // 動画セクションを非表示
    main.style.display = "block"; // メインを表示
});

// ふわっとコンテンツが出るやつ
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in");

    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // ハンバーガーメニュー開閉
    faders.forEach((el) => {
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const globalNav = document.getElementById("global-nav");

    console.log(burgerMenu, globalNav); // null なら要素が取得できていない

    burgerMenu.addEventListener("click", function () {
        globalNav.classList.toggle("open");
        burgerMenu.classList.toggle("open");
    });
});

// Benefitsのポップアップ
document.addEventListener("DOMContentLoaded", function () {
    const benefitChildren = document.querySelectorAll(".benefit-child");

    benefitChildren.forEach((child) => {
        child.addEventListener("click", () => {
            const popupId = child.getAttribute("data-popup");
            const popup = document.getElementById(popupId);

            // すべてのpopupを非表示に
            document
                .querySelectorAll(".popup")
                .forEach((p) => (p.style.display = "none"));

            // クリックしたpopupを表示
            if (popup) popup.style.display = "block";
        });
    });

    // 任意：popupをクリックしたら閉じる
    document.querySelectorAll(".popup").forEach((popup) => {
        popup.addEventListener("click", () => {
            popup.style.display = "none";
        });
    });
});

// トップへ戻るボタンの機能が実装されていない
