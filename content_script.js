const regex = /youtube.com\/(c|user|channel)/g;
const except = [
  'playlists',
  'about',
  'community',
  'channels',
  'about',
  'videos'
];
const videoTabIndex = 1;

(document.body || document.documentElement).addEventListener('transitionend',
  function(/*TransitionEvent*/ event) {
    var url = document.location.href;
    if (url.match(regex) && !new RegExp(except.join("|")).test(url)) {
      const channelTabs = document.getElementsByTagName("paper-tab");
      channelTabs[videoTabIndex] && channelTabs[videoTabIndex].click();   
}
}, true);