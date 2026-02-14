/* ==========================
   PASSWORD SETTING
   Format: DDMMYYYY
========================== */

const correctPassword = "25112025"; // Ganti sesuai tanggal kamu

/* ==========================
   PAGE FADE IN
========================== */

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

/* ==========================
   CHECK PASSWORD
========================== */

function checkPassword() {
    const inputField = document.getElementById("password");
    const error = document.getElementById("error-message");

    if (!inputField) return;

    const input = inputField.value;

    if (input === correctPassword) {
        fadeAndGo("page2.html");
    } else {
        if (error) {
            error.innerHTML = "Wrong password, try again my love ❤️";
        }
    }
}

/* ==========================
   UNIVERSAL NAVIGATION
========================== */

function goPage(page) {
    if (!page) return;
    fadeAndGo(page);
}

/* ==========================
   FADE TRANSITION
========================== */

function fadeAndGo(page) {
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = page;
    }, 800);
}

/* ==========================
   BACK TO HOME
========================== */

function goHome() {
    fadeAndGo("index.html");
}