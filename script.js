const SECRET_CODE = "HALEY";

const loadingCard = document.querySelector("#loadingCard");
const codeForm = document.querySelector("#codeForm");
const codeInput = document.querySelector("#codeInput");
const formMessage = document.querySelector("#formMessage");
const reward = document.querySelector("#reward");

window.setTimeout(() => {
  loadingCard?.classList.add("is-hidden");
}, 1500);

codeForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const answer = codeInput.value.trim().toUpperCase();

  if (answer === SECRET_CODE) {
    reward.hidden = false;
    formMessage.textContent = "Correct answer. Reward chest opened.";
    formMessage.style.color = "#2e6f44";
    reward.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  reward.hidden = true;
  formMessage.textContent = "Not this route. Try another villager.";
  formMessage.style.color = "#b84f5a";
});
