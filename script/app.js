let mainNavbar = document.getElementById("mainNavbar");
let toggleBar = document.getElementById("toggleBar");
let gotoTop = document.querySelector(".gotoTop");

window.onscroll = function () {
  scrollForTopBtn();
};

const scrollForTopBtn = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    gotoTop.style.display = "block";
  } else {
    gotoTop.style.display = "none";
  }
};

const goToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.body.style.transition = "0.3s";
};

toggleBar.addEventListener("click", () => {
  mainNavbar.classList.toggle("openCloseNav");
});

function sendtoWhatsapp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let url =
    "https://wa.me/917304888579?text=" +
    "Name: " +
    name +
    "%0a" +
    "Phone: " +
    phone +
    "%0a" +
    "email: " +
    email +
    "%0a" +
    "message: " +
    message;

  window.open(url, "_blank").focus();
}

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".num");

  function startCounting(counter) {
    const target = +counter.getAttribute("data-target");
    const increment = target / 100;
    let count = 0;

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        counter.innerText = target;
        clearInterval(interval);
      } else {
        counter.innerText = Math.ceil(count);
      }
    }, 20);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          startCounting(counter);
          observer.unobserve(counter);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  counters.forEach((counter) => observer.observe(counter));
});
