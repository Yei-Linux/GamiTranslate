import { syncStoreSetValue, syncStoreGetValue } from "../helpers/storage.js";

async function listenerCardsCombo(comboId, storageKey) {
  const cardsPersSessionCombo = document.querySelector(`#${comboId}`);
  if (!cardsPersSessionCombo) return;

  cardsPersSessionCombo.addEventListener("input", async (e) => {
    const { value } = e.target;
    await syncStoreSetValue(storageKey, value);
  });
}

async function setSelectedCardsComboOption(
  prefix,
  selectOneOptionValue,
  storageKey
) {
  const cardsPerSessionSelected = await syncStoreGetValue(storageKey);
  const idToSelectCardsPerSession =
    cardsPerSessionSelected || selectOneOptionValue;

  const optionToSelect = document.querySelector(
    `#${prefix}__${idToSelectCardsPerSession}`
  );

  if (!optionToSelect) return;

  optionToSelect.setAttribute("selected", true);
}

async function setupCardsSetting() {
  await setSelectedCardsComboOption(
    "cardspersession",
    "none",
    "cardsPerSession"
  );
  await listenerCardsCombo("cardspersession__combo", "cardsPerSession");

  await setSelectedCardsComboOption("cardssorting", "none", "cardsSorting");
  await listenerCardsCombo("cardssorting__combo", "cardsSorting");
}

export default setupCardsSetting;
