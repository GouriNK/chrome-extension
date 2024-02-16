chrome.runtime.onInstalled.addListener(() => {
    console.log('Chrome extension installed!')
});

  chrome.bookmarks.onCreated.addListener(() => {
    console.log('Page has been bookmarked!');
})
