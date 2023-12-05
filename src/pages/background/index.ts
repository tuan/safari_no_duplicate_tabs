import enabledStatusStorage from '@root/src/shared/storages/enabledStatusStorage';
import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

async function handleTabUpdated(targetTabId: number, _: chrome.tabs.TabChangeInfo, targetTab: chrome.tabs.Tab) {
  const enabledStatus = await enabledStatusStorage.get();
  if (!enabledStatus) {
    return;
  }

  const currentUrl = targetTab.url;
  if (currentUrl == null) {
    return;
  }

  const currentTabs = await chrome.tabs.query({ currentWindow: true });
  const duplicates = currentTabs.filter(tab => tab.id != null && tab.url == currentUrl && tab.id != targetTabId);

  if (duplicates.length === 0) {
    return;
  }

  const first = duplicates[0];
  await chrome.tabs.update(first.id, { active: true });
  chrome.tabs.remove(targetTabId);
}

chrome.tabs.onUpdated.addListener(handleTabUpdated);
