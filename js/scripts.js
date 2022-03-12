/* icon-button */
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", e => {
    const iconButton = e.target.closest(".icon-button");
    if (iconButton) {
      if (!iconButton.classList.contains("icon-button_link")) {
        iconButton.classList.toggle("icon-button_active");
      }
    }
  })
});