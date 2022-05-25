import { cardsSaved } from "../constants/cardssetting.js";
import { validateSpeechApi, textToSpeach } from "../helpers/speech.js";

function learning(learnFormInformation) {
  try {
    validateSpeechApi();

    for (const { text, meaningOf } of cardsSaved) {
      textToSpeach(`Word of vocabulary: ${text}`);
      textToSpeach(`Meaning of this word: ${meaningOf}`);
    }
  } catch (error) {
    console.log(error);
  }
}

export default learning;
