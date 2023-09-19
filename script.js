const panels = document.querySelectorAll(".panel");
//adds click event listener to each panel
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    //add active class to current clicked panel
    panel.classList.add("active");
  });
});
// removes active class
function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
