// Define your blocked URLs as an array
const blockedUrls = [
  "https://news.ycombinator.com/",
  "https://www.yahoo.com/",
  "redd",
];

// Register your listener function
browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    // Check if the requested URL is in the blocked list
    if (blockedUrls.includes(details.url)) {
      // Return a blocking response
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
