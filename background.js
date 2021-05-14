// Copyright (c) 2015 o9000. All rights reserved.
// Use of this source code is governed by the GNU General Public License version 2.

var state = {};

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({ file: "content.js" });
});

function updateIcon(tabId) {
  var text;
  if (tabId in state) {
    text = state[tabId] ? "" + state[tabId] : "";
  } else {
    text = "";
  }
  chrome.browserAction.setBadgeText({tabId: tabId, text: text});
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if ('state' in request) {
    state[sender.tab.id] = request.state;
    updateIcon(sender.tab.id);
  } else if ('setting' in request) {
    chrome.storage.sync.get({
      defaultMode: "1"
    }, function(items) {
      sendResponse(items.defaultMode);
    });
    return true;
  }
});

chrome.tabs.onActivated.addListener(function(e) {
  updateIcon(e.tabId);
});

browser.commands.onCommand.addListener(function (command) {
	// cycle over the modes
	if (command === "cycle-feature") {
		chrome.tabs.executeScript({ file: "content.js" });
	} else if (command === "cycle-feature-backward") {
		chrome.tabs.executeScript({ file: "content_backward.js" });
	
	// toggle on off
	} else if (command === "toggle-feature") {
		chrome.tabs.executeScript({ file: "toggle.js" });
	
	// turn on specific modes
	} else if (command === "mode-1-feature") {
		chrome.tabs.executeScript({ file: "mode1.js" });
	} else if (command === "mode-2-feature") {
		chrome.tabs.executeScript({ file: "mode2.js" });
	} else if (command === "mode-3-feature") {
		chrome.tabs.executeScript({ file: "mode3.js" });
	} else if (command === "mode-4-feature") {
		chrome.tabs.executeScript({ file: "mode4.js" });
	}
});
