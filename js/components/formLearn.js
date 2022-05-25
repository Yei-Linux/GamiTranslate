import { syncStoreGetValue } from "../helpers/storage.js";
import learning from "../usecase/learning.js";

async function isValidInputsOfForm() {
  const learningTypeSelected = await syncStoreGetValue("learningType");
  const cardPerSession = await syncStoreGetValue("cardsPerSession");
  const cardsSorting = await syncStoreGetValue("cardsSorting");

  if ([null, undefined].includes(learningTypeSelected)) return null;
  if ([null, undefined, "none"].includes(cardPerSession)) return null;
  if ([null, undefined, "none"].includes(cardsSorting)) return null;

  return { learningTypeSelected, cardPerSession, cardsSorting };
}

async function formLearn() {
  const formLearnButton = document.querySelector("#formLearnButton");
  if (!formLearnButton) return;

  formLearnButton.addEventListener("click", async () => {
    const isValidLearnFormInformation = await isValidInputsOfForm();

    if (!isValidLearnFormInformation) {
      console.log("invalid");
      return;
    }

    learning(isValidLearnFormInformation);
  });
}

export default formLearn;
