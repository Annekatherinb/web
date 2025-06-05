
const logoImage = document.getElementById('logoImage');

logoImage.addEventListener('click', (event) => {

    const rect = logoImage.getBoundingClientRect();
    const clickY = event.clientY - rect.top;
    const imageHeight = rect.height;

    if (clickY > imageHeight / 2) {
        window.location.href = "https://www.gov.co/";
    }
});

const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

const scrollTop = function () {

    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = "&uarr;";
    scrollBtn.setAttribute("id", "scroll-btn");
    document.body.appendChild(scrollBtn);

    const scrollBtnDisplay = function () {
        window.scrollY > window.innerHeight
            ? scrollBtn.classList.add("show")
            : scrollBtn.classList.remove("show");
    };
    window.addEventListener("scroll", scrollBtnDisplay);

    const scrollWindow = function () {
        if (window.scrollY != 0) {
            setTimeout(function () {
                window.scrollTo(0, window.scrollY - 50);
                scrollWindow();
            }, 10);
        }
    };
    scrollBtn.addEventListener("click", scrollWindow);
};
scrollTop();