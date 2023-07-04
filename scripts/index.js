const buttons = document.querySelectorAll(".offer-services__list-button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", showModal);
}

function showModal(event) {
  const targetModalId = event.target.getAttribute("data-modal-target");
  const targetModal = document.querySelector(targetModalId);
  const backdrop = document.querySelector(".modal-backdrop");

  targetModal.style.display = "block";
  backdrop.style.display = "block";
}

function hideModal(modalId) {
  const modal = document.querySelector(modalId);
  const backdrop = document.querySelector(".modal-backdrop");

  modal.style.display = "none";
  backdrop.style.display = "none";
}
