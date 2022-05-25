import { syncStoreGetValue } from "../helpers/storage.js";

async function isValidInputsOfForm() {
  const learningTypeSelected = await syncStoreGetValue("learningType");
  const cardPerSession = await syncStoreGetValue("cardsPerSession");
  const cardsSorting = await syncStoreGetValue("cardsSorting");

  if ([null, undefined].includes(learningTypeSelected)) return false;
  if ([null, undefined, "none"].includes(cardPerSession)) return false;
  if ([null, undefined, "none"].includes(cardsSorting)) return false;

  return true;
}

async function formLearn() {
  const formLearnButton = document.querySelector("#formLearnButton");
  if (!formLearnButton) return;

  formLearnButton.addEventListener("click", async () => {
    const isValid = await isValidInputsOfForm();

    if (!isValid) {
      console.log("invalid");
      return;
    }

    console.log("valid");
  });
}

export default formLearn;
