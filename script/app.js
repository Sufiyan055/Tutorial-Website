let mainNavbar = document.getElementById("mainNavbar");
let toggleBar = document.getElementById("toggleBar");
let gotoTop = document.querySelector(".gotoTop");

/* Go to Top */

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

// Counting Animation
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".num");

  // Function to start the counting animation for each counter
  function startCounting(counter) {
    const target = +counter.getAttribute("data-target");
    const increment = target / 100; // Adjust increment for smooth animation
    let count = 0;

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        counter.innerText = target; // Ensure it matches the target exactly
        clearInterval(interval);
      } else {
        counter.innerText = Math.ceil(count);
      }
    }, 20);
  }

  // Observer callback function to check if elements are in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          startCounting(counter);
          observer.unobserve(counter); // Stop observing once counted
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the counter is visible
    }
  );

  // Start observing all counters
  counters.forEach((counter) => observer.observe(counter));
});

/* Home - TESTINOMIAL  */
const testinomials = [
  {
    name: "Ethan Thompson",
    image: "images/StImg3.webp",
    testinomial:
      "Outstanding Tutorial! Clear instructions, practical examples, and interactive exercises made complex topics easy to grasp. The instructor’s expertise and enthusiasm were evident throughout. Highly recommend for anyone looking to master CBSE!",
  },
  {
    name: "Emily Wilson",
    image: "images/StImg1.webp",
    testinomial:
      "Outstanding Tutorial! Clear instructions, practical examples, and interactive exercises made complex topics easy to grasp. The instructor’s expertise and enthusiasm were evident throughout. Highly recommend for anyone looking to master CBSE!",
  },
  {
    name: "Lucas Brooks",
    image: "images/StImg4.webp",
    testinomial:
      "Outstanding Tutorial! Clear instructions, practical examples, and interactive exercises made complex topics easy to grasp. The instructor’s expertise and enthusiasm were evident throughout. Highly recommend for anyone looking to master CBSE!",
  },
  {
    name: "Avery Mitchell",
    image: "images/StImg2.webp",
    testinomial:
      "Outstanding Tutorial! Clear instructions, practical examples, and interactive exercises made complex topics easy to grasp. The instructor’s expertise and enthusiasm were evident throughout. Highly recommend for anyone looking to master CBSE!",
  },
];

//current Slide
let i = 0;

//Total Slide
let j = testinomials.length;

let testinomialContainer = document.getElementById("testinomial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimnial();
});

prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimnial();
});

let displayTestimnial = () => {
  testinomialContainer.innerHTML = `
    <p>${testinomials[i].testinomial}</p>
    <img src=${testinomials[i].image}>
    <h3>${testinomials[i].name}<h3>
    `;
};

window.onload = displayTestimnial();

/*  */

/* Gallery Page js code is in gallery.html*/
