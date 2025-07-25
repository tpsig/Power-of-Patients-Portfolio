// About Me Tabs
var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        for( let tablink of tablinks) {
            tablink.classList.remove("active-links");
        }
        for( let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-links");
        document.getElementById(tabname).classList.add("active-tab");
    }

// Page Scroll Effect //
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden");

    function checkScroll() {
        elements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// Another Page Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  });
});
