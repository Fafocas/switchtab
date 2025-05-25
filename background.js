export async function getSwitchTabId(direction) {
  const [currentTab] = await getCurrentTab();
  const allTabs = await getAllTabs();
  const currentTabIndex = currentTab.index;
  let newIndex;

  if (direction === "right") {
    newIndex = (currentTabIndex + 1) % allTabs.length;
  } else if (direction === "left") {
    newIndex = (currentTabIndex - 1 + allTabs.length) % allTabs.length;
  } else {
    return null;
  }

  // 실제 배열에서 인덱스로 접근
  return allTabs[newIndex].id;
}

export async function focusTab(tabId) {
  await chrome.tabs.update(tabId, { active: true });
}

async function getCurrentTab(){
  const currentTab = await chrome.tabs.query({ active: true, currentWindow: true });
  return currentTab
}

async function getAllTabs() {
  const tabs = await chrome.tabs.query({ currentWindow: true });
  return tabs
}