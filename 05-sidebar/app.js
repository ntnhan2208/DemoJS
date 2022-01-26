const btnToggle = document.querySelector(".sidebar-toggle");
const btnClose = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

btnToggle.addEventListener("click", function () {
  if (!sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.add("show-sidebar");
  }

  // sidebar.classList.toggle('show-sidebar');
});

btnClose.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");

  // sidebar.classList.toggle('show-sidebar');
});
