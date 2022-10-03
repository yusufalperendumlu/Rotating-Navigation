const open = document.querySelector("#open");
const close = document.querySelector("#close");
const main = document.querySelector(".main");

open.addEventListener('click', () =>
    main.classList.add("show-nav")
)

close.addEventListener('click', () =>
    main.classList.remove("show-nav")
)