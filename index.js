/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
//#1
function getRandomFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const role = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return { name, role, rate };
}
console.log(getRandomFreelancer());
//#2
const freelancers = Array.from(
  { length: NUM_FREELANCERS },
  getRandomFreelancer
);
console.log(freelancers);
//#3
function getAverageRate(freelancers) {
  const avgRate = freelancers.reduce((sum, freelancer) => {
    return sum + freelancer.rate;
  }, 0);
  return avgRate / freelancers.length;
}

console.log(getAverageRate(freelancers));
//#4
const avgFreelanceRate = getAverageRate(freelancers);
//#5
function FreelancerCard(freelancer) {
  const cardContainer = document.createElement("figure");
  const content = `${freelancer.name} - ${freelancer.role} - ${freelancer.rate}`;
  cardContainer.innerHTML = content;
  //   console.log(cardContainer);
  return cardContainer;
}
FreelancerCard(freelancers[0]);
console.log(FreelancerCard(freelancers[0]));

//#6
function FreelancerCards() {
  const cardsArticle = document.createElement("article");
  cardsArticle.classList.add("freelancers");
  const cards = freelancers.map(FreelancerCard);
  console.log(cards);
  cardsArticle.replaceChildren(...cards);
  return cardsArticle;
}
FreelancerCards();

//#7
function AvgRate() {
  const rateContainer = document.createElement("div");
  const content = `Average Rate: $${getAverageRate(freelancers)}`;
  rateContainer.innerHTML = content;
  return rateContainer;
}
console.log(AvgRate());

//#8

function render() {
  const app = document.getElementById("app");
  app.innerHTML = `<h1>Freelancer Forum</h1>`;
  app.appendChild(AvgRate());
  app.appendChild(FreelancerCards());
}
render();
