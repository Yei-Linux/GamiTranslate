import listenerTabs from "./components/tab.js";
import setupCardsSetting from "./components/cardssetting.js";
import formLearn from "./components/formLearn.js";

async function popup() {
  await listenerTabs();
  await setupCardsSetting();
  await formLearn();
}

popup();
