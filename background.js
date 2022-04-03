chrome.action.disable();
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete') {
        console.log(tab.url);
        if (tab.url.indexOf('amazon') != -1) {
            console.log('Extension Enabled');
            chrome.action.enable(tabId);
            if (tab.url.indexOf('crid') != -1) {
                chrome.scripting.executeScript({
                    
                });
            }
            
        if (tab.url.indexOf('google') != -1) {
            console.log('Extension Enabled');
            chrome.action.enable(tabId);

            }
            
        } else {
            console.log('Extension Disabled');
            chrome.action.disable(tabId);
        }
    }
})