const testinomials = [
  {
    name: "Ethan Thompson",
    image: "images/StImg3.webp",
    testinomial:
      "Excellent tutorial! The explanations were crystal clear, and the examples were spot on. I was able to follow along easily and learned so much. Highly recommend!",
  },
  {
    name: "Emily Wilson",
    image: "images/StImg1.webp",
    testinomial:
      "This tutorial exceeded my expectations! The instructor's teaching style is engaging, informative, and concise. I gained practical skills that I can apply immediately. Awesome job!",
  },
  {
    name: "Lucas Brooks",
    image: "images/StImg4.webp",
    testinomial:
      "I was struggling to understand the concept until I took this tutorial. Now, I feel confident and empowered! The pace was perfect, and the materials were top-notch. Thank you!",
  },
  {
    name: "Avery Mitchell",
    image: "images/StImg2.webp",
    testinomial:
      "Outstanding tutorial! The instructor broke down complex topics into bite-sized chunks, making it easy to grasp. The interactive exercises reinforced my learning beautifully. 10/10 would recommend!",
  },
];

let i = 0;

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
      <h3>${testinomials[i].name}</h3>
      `;
};

window.onload = displayTestimnial();
