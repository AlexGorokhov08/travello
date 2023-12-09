const btnMenu = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav-list");
const btnClose = document.querySelector(".close-btn");

btnClose.addEventListener("click", () => {
  navList.classList.toggle("show");
});

btnMenu.addEventListener("click", () => {
  navList.classList.toggle("show");
});

const tabButtons = document.querySelector(".tab-buttons");
const tabContainer = document.querySelector(".all-tabs");

tabButtons.addEventListener("click", (e) => {
  const btn = e.target.closest(".tab-btn");

  if (!btn || btn.classList.contains("tab-btn-active")) return;

  const activeBtn = tabButtons.querySelector(".tab-btn-active");

  if (activeBtn) {
    activeBtn.classList.remove("tab-btn-active");
  }
  btn.classList.add("tab-btn-active");

  const activeTab = tabContainer.querySelector(".tabs-active");

  if (activeTab) {
    activeTab.classList.remove("tabs-active");
  }

  const tabId = btn.dataset.tab;
  const selectedTab = tabContainer.querySelector(`[data-tab="${tabId}"]`);

  selectedTab.classList.add("tabs-active");
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
