/*global chrome*/

export const getCurrentTab = async () => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};

export const injectScriptInCurrentTab = async (fn) => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: fn,
  });
};

export const getAllImagesFromTab = async (fn) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "GET_ALL_IMAGES" }, fn);
  });
};
