/*global chrome*/

chrome.runtime.onMessage.addListener((request, sender, response) => {
  switch (request.action) {
    case "GET_ALL_IMAGES":
      const _images = [];
      const imgTags = document.getElementsByTagName("img");
      for (let i = 0; i < imgTags.length; i++) {
        _images.push({
          url: imgTags[i].getAttribute("src"),
          alt: imgTags[i].getAttribute("alt") || "Web Image",
        });
      }
      response(_images);
      break;
    default:
      response(document);
      break;
  }
});
