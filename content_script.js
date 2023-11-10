const regex = /youtube.com\/@.*/g;
const except = [
  "playlists",
  "about",
  "community",
  "channels",
  "about",
  "videos",
  "search",
];
const videoTabIndex = 1;

(document.body || document.documentElement).addEventListener(
  "transitionend",
  function (/*TransitionEvent*/ event) {
    var url = document.location.href;
    console.log(url, url.match(regex));
    if (url.match(regex) && !new RegExp(except.join("|")).test(url)) {
      const channelTabs = document.getElementsByTagName("yt-tab-shape");
      channelTabs[videoTabIndex] && channelTabs[videoTabIndex].click();
    }
  },
  true
);
