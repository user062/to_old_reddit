chrome.webRequest.onBeforeRequest.addListener (
    function(details) {
        url = details.url.split("/");
        return {redirectUrl : ["https://old.reddit.com", url.slice(3, url.length).join("/")].join("/")} },
    {urls:["https://www.reddit.com/*"]},
    ["blocking"]);
