const gallery = document.querySelector(".gallery");
const cards = [...gallery.querySelectorAll(".project-card")];
const buttons = cards.map(card =>
  card.querySelector(".project-cover")
);

let activeCard = null;
const details = document.createElement("section");

details.id = "project-details";
details.className = "project-details";

function renderDetails() {
  details.remove();

  buttons.forEach(button => {
    button.setAttribute(
      "aria-expanded",
      String(button.closest(".project-card") === activeCard)
    );
  });

  if (!activeCard) return;

  const activeTop = activeCard.offsetTop;

  const rowCards = cards.filter(card =>
    Math.abs(card.offsetTop - activeTop) < 2
  );

  const lastCard = rowCards[rowCards.length - 1];

  const title = activeCard.querySelector(
    ".project-title"
  ).textContent.trim();

  const template = activeCard.querySelector(
    ".project-template"
  );

  const heading = document.createElement("h2");
  heading.textContent = title;

  details.replaceChildren(
    heading,
    template.content.cloneNode(true)
  );

  lastCard.insertAdjacentElement("afterend", details);
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const selectedCard = cards[index];

    activeCard =
      activeCard === selectedCard ? null : selectedCard;

    renderDetails();
  });
});

window.addEventListener("resize", () => {
  if (activeCard) renderDetails();
});
