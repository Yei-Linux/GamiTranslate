export function textToSpeach(message) {
  const messageSpeech = new SpeechSynthesisUtterance();
  messageSpeech.text = message;
  messageSpeech.lang = "en";
  messageSpeech.volume = 1;

  window.speechSynthesis.speak(messageSpeech);
}

export function validateSpeechApi() {
  const isSupportedInBrowser = window.speechSynthesis;

  if (!isSupportedInBrowser) {
    throw new Error("Its not supported in this browser version 😣");
  }
}
