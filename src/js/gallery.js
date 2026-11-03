const gallery = document.querySelector(".gallery");
const cards = [...gallery.querySelectorAll(".project-card")];

const filterButtons = [
  ...document.querySelectorAll(".filter-button")
];

let activeCard = null;

const details = document.createElement("section");
details.id = "project-details";
details.className = "project-details";

// Обновление раскрытого кейса
function renderDetails() {
  details.remove();

  const visibleCards = cards.filter(card => !card.hidden);

  cards.forEach(card => {
    const button = card.querySelector(".project-cover");

    button.setAttribute(
      "aria-expanded",
      String(card === activeCard)
    );
  });

  if (!activeCard || activeCard.hidden) return;

  const activeTop = activeCard.offsetTop;

  const rowCards = visibleCards.filter(card =>
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

// Открытие и закрытие кейсов
cards.forEach(card => {
  const button = card.querySelector(".project-cover");

  button.addEventListener("click", () => {
    activeCard = activeCard === card ? null : card;
    renderDetails();
  });
});

// Фильтрация по профессиональным меткам
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    // Закрываем раскрытый кейс
    activeCard = null;
    details.remove();

    // Показываем только подходящие проекты
    cards.forEach(card => {
      const roles = [
        ...card.querySelectorAll(".project-tag")
      ].map(tag => tag.textContent.trim());

      card.hidden =
        filter !== "all" && !roles.includes(filter);
    });

    // Обновляем активную кнопку
    filterButtons.forEach(filterButton => {
      const selected = filterButton === button;

      filterButton.classList.toggle(
        "is-active",
        selected
      );

      filterButton.setAttribute(
        "aria-pressed",
        String(selected)
      );
    });

    renderDetails();
  });
});

// Перемещаем описание при изменении ширины экрана
window.addEventListener("resize", () => {
  if (activeCard) renderDetails();
});
