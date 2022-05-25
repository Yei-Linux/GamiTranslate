import { syncStoreSetValue, syncStoreGetValue } from "../helpers/storage.js";

function clearSelectedTab() {
  const tabActive = document.querySelector(".tab--active");
  if (!tabActive) return;
  tabActive.classList.remove("tab--active");
}

async function setTabOption(id) {
  await syncStoreSetValue("learningType", id);
}

async function selectNewTab(id) {
  const tabToSelect = document.querySelector(`#${id}`);
  if (!tabToSelect) return;

  await setTabOption(id);
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

async function setInitialTab() {
  const savedTabSelected = await syncStoreGetValue("learningType");
  const idToSearch = savedTabSelected || "listening";

  const idSelected = document.querySelector(`#${idToSearch}`);
  if (!idSelected) return;

  idSelected.classList.add("tab--active");
}

async function listenerTabs() {
  await setInitialTab();

  const tabContainer = document.querySelector(".tabs__container");
  if (!tabContainer) return;

  tabContainer.addEventListener("click", handleSelectTab);
}

export default listenerTabs;
