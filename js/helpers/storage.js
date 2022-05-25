export const syncStoreSetValue = (key, value) => {
  return new Promise((res, rej) => {
    chrome.storage.sync.set({ [key]: value }, () => {
      res();
    });
  });
};

export const syncStoreGetValue = (key) => {
  return new Promise((res, rej) => {
    chrome.storage.sync.get([key], (result) => {
      res(result[key]);
    });
  });
};
