function changeHeader() {
    let winY = window.pageYOffset;
    const hide = "hide-header";
    const h1 = document.querySelector(".head1");
    const h2 = document.querySelector(".head2");
    if (winY === 0) {
        h1.classList.remove(hide);
        h2.classList.add(hide);
    } else {
        h1.classList.add(hide);
        h2.classList.remove(hide);
    }
}
document.addEventListener('scroll', changeHeader);