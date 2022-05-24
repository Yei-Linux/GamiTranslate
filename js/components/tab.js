function clearSelectedTab() {
  const tabActive = document.querySelector(".tab--active");
  if (!tabActive) return;
  tabActive.classList.remove("tab--active");
}

function selectNewTab(id) {
  const tabToSelect = document.querySelector(`#${id}`);
  if (!tabToSelect) return;
  tabToSelect.classList.add("tab--active");
}

function getSelectedIdTab(e) {
  const { target: childrenSelected } = e;

  const { tagName } = childrenSelected;

  if (tagName !== "LI") return;

  const { id: idSelected } = childrenSelected;

  if (!idSelected) return;

  return idSelected;
}

function handleSelectTab(e) {
  const idSelected = getSelectedIdTab(e);

  if (!idSelected) return;

  clearSelectedTab();
  selectNewTab(idSelected);
}

function listenerTabs() {
  const tabContainer = document.querySelector(".tabs__container");

  if (!tabContainer) return;

  tabContainer.addEventListener("click", handleSelectTab);
}

export default listenerTabs;
